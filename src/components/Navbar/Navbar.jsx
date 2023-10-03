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
  font-size: 20px;
  text-decoration: none;
  @media (max-width: 900px) {
    display: none;
  }
  :hover{
    color:deepskyblue;
  }
  &.active {
    color: #3a60cf;
    font-weight: bold;
  }
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
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 900px) {
    margin: 17px 10px 10px 5px;
    ${"" /* display: none; */}
  }
  :hover{
    -webkit-box-shadow: 0 0 10px cyan;
    box-shadow: 0 0 10px cyan;
  }
`;

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(null);

  const location = useLocation();

  React.useEffect(() => {
    setActiveNavLink(location.pathname);
  }, [location]);


  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLink to="/"><Logo src="./img/logo2.png"></Logo></NavbarLink>
          {/* <NavbarLink to="/">NSCC</NavbarLink> */}
          <NavLinks>
            <NavbarLink
              to="/projects"
              className={activeNavLink === '/projects' ? 'active' : ''}
            >Projects
            </NavbarLink>
            <NavbarLink to="/events"
              className={activeNavLink === '/events' ? 'active' : ''}
            >Events</NavbarLink>
            <NavbarLink to="/programs"
              className={activeNavLink === '/programs' ? 'active' : ''}
            >Programs</NavbarLink>
            <NavbarLink to="/team"
              className={activeNavLink === '/team' ? 'active' : ''}
            >Team</NavbarLink>
            <NavbarLink to="/resources"
              className={activeNavLink === '/resources' ? 'active' : ''}
            >Resources</NavbarLink>
            <NavbarLink to="http://blog.nsccbpit.tech/" target="_blank"
              className={activeNavLink === '/http://blog.nsccbpit.tech/' ? 'active' : ''}
            >
              Blog
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
