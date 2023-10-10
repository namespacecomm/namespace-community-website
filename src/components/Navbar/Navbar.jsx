import styled from "styled-components";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  height: fit-content;
  background-color: #010116;
  display: flex;
  z-index: 99999999;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  @media (min-width: 900px) {
    height: 90px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  @media (max-width: 900px) {
    flex: 30%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2%;
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
  text-decoration: none;
  transition: 200ms ease-in-out;
  padding: 0 1rem;
  border-radius: 0.5rem;
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
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: 50px;
  align-self: center;
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
    align-self: center;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(null);

  const location = useLocation();

  React.useEffect(() => {
    setExtendNavbar(false);
    setActiveNavLink(location.pathname);
  }, [location]);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLogo to="/">
            <Logo src="./img/logo2.png"></Logo>
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
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <a href="https://linktr.ee/nscc_bpit" className="mr-4">
              <Button>Connect with us</Button>
            </a>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/events">Events</NavbarLinkExtended>
          <NavbarLinkExtended to="/programs">Programs</NavbarLinkExtended>
          <NavbarLinkExtended to="/Team">Team</NavbarLinkExtended>
          <NavbarLinkExtended to="/resources">Resources</NavbarLinkExtended>
          <NavbarLinkExtended to="http://blog.nsccbpit.tech/">
            Blog
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
