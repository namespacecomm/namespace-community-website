import styled from "styled-components";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Squash as Hamburger} from 'hamburger-react'
const NavbarContainer = styled.nav`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  display: flex;
  z-index: 99999999;
  flex-direction: column;
  align-items: center;
  position: fixed;
  transition: all 3s ease-in-out;
  @media (min-width: 900px) {
    height: 90px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
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

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
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
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: 200ms ease-in-out;
  padding: 0.5rem;
  border-radius: 10px 0 10px 0;
  @media (max-width: 900px) {
    display: none;
  }
  :hover {
    // color: deepskyblue;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &.active:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const NavbarLogo = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;

const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  margin: 10px;
  :hover {
    color: #3a60cf;
    font-weight: bold;
  }
`;

const Logo = styled.img`
  margin: 8px;
  max-width: 180px;
  height: 50px;
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
  width:100%;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top:40px;
  gap:10px;

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
    ${"" /* display: none; */}
  }
  :hover {
    background-color: #138AF2;
  }
`;

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(null);

  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
    setActiveNavLink(location.pathname);
  }, [location]);

  return (
    <NavbarContainer isOpen={isOpen}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLogo to="/">
            <Logo src="../.././img/logo2.png"></Logo>
          </NavbarLogo>
          <NavLinks>
            <NavbarLink
              to="/projects"
              // onClick={handlememu}
              className={activeNavLink === "/projects" ? "active " : ""}
            >
              <div>
                Projects
                {activeNavLink === "/projects" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="/events"
              className={activeNavLink === "/events" ? "active" : ""}
            >
              <div>
                Events
                {activeNavLink === "/events" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
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
              to="http://blog.nsccbpit.tech/"
              target="_blank"
              className={
                activeNavLink === "/http://blog.nsccbpit.tech/" ? "active" : ""
              }
            >
              <div>
                Blog
                {activeNavLink === "/http://blog.nsccbpit.tech/" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
            <NavbarLink
              to="https://github.com/NSCC-BPIT/NSCC-BPIT-Website"
              target="_blank"
              className={
                activeNavLink ===
                "https://github.com/NSCC-BPIT/NSCC-BPIT-Website"
                  ? "active"
                  : ""
              }
            >
              <div>
                Contribute
                {activeNavLink ===
                  "https://github.com/NSCC-BPIT/NSCC-BPIT-Website" && (
                  <hr className="border-3 rounded-full" />
                )}
              </div>
            </NavbarLink>
          </NavLinks>

          <NavbarLinkContainer>
            <a href="https://linktr.ee/nscc_bpit" className="mr-6">
              <Button>Connect with us</Button>
            </a>
            <OpenLinksButton
            >
              {/* {isOpen ? <>&#10005;</> : <> &#8801;</>} */}
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
      </NavbarInnerContainer>
      {isOpen && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/events">Events</NavbarLinkExtended>
          <NavbarLinkExtended to="/programs">Programs</NavbarLinkExtended>
          <NavbarLinkExtended to="/Team">Team</NavbarLinkExtended>
          <NavbarLinkExtended to="/resources">Resources</NavbarLinkExtended>
          <NavbarLinkExtended to="http://blog.nsccbpit.tech/" target="_blank">
            Blog
          </NavbarLinkExtended>
          <NavbarLinkExtended to="https://github.com/NSCC-BPIT/NSCC-BPIT-Website" target="_blank">
            Contribute
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
