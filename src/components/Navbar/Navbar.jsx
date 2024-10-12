import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const NavbarContainer = styled.nav`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  display: ${({ isVisible }) =>
    isVisible ? "flex" : "none"}; /* Control visibility */
  z-index: 99999999;
  flex-direction: column;
  align-items: center;
  position: fixed;
  transition: all 3s ease-in-out;
  @media (min-width: 900px) {
    height: 90px;
  }
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

const SecondContainer = styled.div`
  flex: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  backdrop-filter: blur(8px);
  transition: backdrop-filter 0.5s ease;
  z-index: 999;
  box-shadow: inset 0px -1px #1d2d44;
  @media (max-width: 900px) {
    flex: 30%;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: 0.8rem;
  font-weight: 400;
  text-decoration: none;
  transition: 200ms ease-in-out;
  padding: 0.5rem;
  border-radius: 10px 0 10px 0;
  position: relative;
  @media (max-width: 900px) {
    display: none;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &.active:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 10px 10px;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 1000;
  width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const DropdownItem = styled(Link)`
  color: white;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  display: block;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const NavbarLogo = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;

const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 12px;
  text-decoration: none;
  margin: 5px;
  :hover {
    color: #3a60cf;
    font-weight: bold;
  }
`;

const Logo = styled.img`
  max-width: 180px;
  height: 100px;
  align-self: center;
`;

const OpenLinksButton = styled.button`
  padding-top: 5px;
  cursor: pointer;
  @media (min-width: 900px) {
    display: none;
    align-self: center;
  }
`;

const NavbarExtendedContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  gap: 10px;
  backdrop-filter: blur(20px);

  @media (min-width: 900px) {
    display: none;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1d28f2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 200ms ease-in-out;
  @media (max-width: 900px) {
    margin: 17px 10px 10px 5px;
  }
  :hover {
    background-color: #138af2;
  }
`;

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [partnersDropdownOpen, setPartnersDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Track navbar visibility
  const dropdownRef = useRef(null);
  const partnersDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setActiveNavLink(location.pathname);
    if (location.pathname === "/") {
      setIsVisible(false); // Hide navbar on home page initially
    }
  }, [location]);

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.9; // 90% of the viewport height
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePartnersDropdownToggle = () => {
    setPartnersDropdownOpen(!partnersDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (
      partnersDropdownRef.current &&
      !partnersDropdownRef.current.contains(event.target)
    ) {
      setPartnersDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsVisible(true); // Ensure navbar is visible on other pages
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavbarContainer isVisible={isVisible} isOpen={isOpen}>
      <NavbarInnerContainer>
        <SecondContainer>
          <NavbarLogo to="/">
            <Logo src="../.././img/horizontal-5.png" alt="Logo" />
          </NavbarLogo>

          <NavLinks>
            <NavbarLink
              to="/projects"
              className={activeNavLink === "/projects" ? "active" : ""}
            >
              <div>
                Projects
                {activeNavLink === "/projects" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>

            <NavbarLink
              to="/achievements"
              className={activeNavLink === "/achievements" ? "active" : ""}
            >
              <div>
                Achievements
                {activeNavLink === "/achievements" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="#"
              className={activeNavLink === "/events" ? "active" : ""}
              onClick={handleDropdownToggle}
            >
              <div>
                Events
                {activeNavLink === "/events" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
              <DropdownMenu ref={dropdownRef} show={dropdownOpen}>
                <DropdownItem to="/techx">TechXcelerate</DropdownItem>
                <DropdownItem to="/nsos">
                  nameSpace Season of Open Source
                </DropdownItem>
                <DropdownItem to="/algorena">Algorena</DropdownItem>
                <DropdownItem to="/hackhazards">HACKHAZARDS</DropdownItem>
                <DropdownItem to="/events">All Events</DropdownItem>
              </DropdownMenu>
            </NavbarLink>
            <NavbarLink
              to="/programs"
              className={activeNavLink === "/programs" ? "active" : ""}
            >
              <div>
                Programs
                {activeNavLink === "/programs" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="/team"
              className={activeNavLink === "/team" ? "active" : ""}
            >
              <div>
                Team
                {activeNavLink === "/team" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="/resources"
              className={activeNavLink === "/resources" ? "active" : ""}
            >
              <div>
                Resources
                {activeNavLink === "/resources" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="/chapters"
              className={activeNavLink === "/chapters" ? "active" : ""}
            >
              <div>
                Chapters
                {activeNavLink === "/chapters" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="http://blog.namespacecomm.in/"
              target="_blank"
              without
              rel="noreferrer"
              className={
                activeNavLink === "/http://blog.namespacecomm.in/"
                  ? "active"
                  : ""
              }
            >
              <div>
                Blog
                {activeNavLink === "/http://blog.namespacecomm.in/" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="#"
              className={activeNavLink === "/partners" ? "active" : ""}
              onClick={handlePartnersDropdownToggle}
            >
              <div>
                Partners
                {activeNavLink === "/partners" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
              <DropdownMenu
                ref={partnersDropdownRef}
                show={partnersDropdownOpen}
              >
                <DropdownItem to="/communitypartner">
                  Become a Community Partner
                </DropdownItem>

                <DropdownItem to="/campusevangelist">
                  Become a Campus Evangelist
                </DropdownItem>
              </DropdownMenu>
            </NavbarLink>

            <NavbarLink
              to="/CodingChallenge"
              className={activeNavLink === "/CodingChallenge" ? "active" : ""}
            >
              <div>
                Coding Challenge
                {activeNavLink === "/CodingChallenge" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
          </NavLinks>

          <NavbarLinkContainer className="flex flex-row md:flex-col md:space-x-6 items-center w-full md:w-auto ">
            <a
              href="https://linktr.ee/namespacecomm"
              target="_blank"
              without
              rel="noreferrer"
              className="w-full"
            >
              <Button className="w-full">Connect with us</Button>
            </a>
            <OpenLinksButton className="mx-4">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </OpenLinksButton>
          </NavbarLinkContainer>
        </SecondContainer>
      </NavbarInnerContainer>
      {isOpen && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/events">Events</NavbarLinkExtended>
          <NavbarLinkExtended to="/programs">Programs</NavbarLinkExtended>
          <NavbarLinkExtended to="/team">Team</NavbarLinkExtended>
          <NavbarLinkExtended to="/resources">Resources</NavbarLinkExtended>
          <NavbarLinkExtended to="/techx">TechXcelerate</NavbarLinkExtended>
          <NavbarLinkExtended to="/nsos">
            nameSpace Season of Open Source
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/algorena">Algorena</NavbarLinkExtended>
          <NavbarLinkExtended to="/hackhazards">HACKHAZARDS</NavbarLinkExtended>
          <NavbarLinkExtended to="/communitypartner">
            Become a Community Partner
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/campusevangelist">
            Become a Campus Evangelist
          </NavbarLinkExtended>
          <NavbarLinkExtended
            to="http://blog.namespacecomm.in/"
            target="_blank"
            without
            rel="noreferrer"
          >
            Blog
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/codingchallenge">
            Coding Challenge
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
