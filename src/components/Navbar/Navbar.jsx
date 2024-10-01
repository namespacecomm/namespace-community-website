import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const NavbarContainer = styled.nav`
  width: 100%;
  height: fit-content;
  backdrop-filter: blur(8px);
  display: flex;
  z-index: 99999999;
  flex-direction: column;
  align-items: center;
  position: fixed;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
  @media (min-width: 900px) {
    height: 90px;
  }
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(8px);
  transition: backdrop-filter 0.5s ease;
  z-index: 999;
`;

const NavbarLogo = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;

const Logo = styled.img`
  margin: 8px;
  max-width: 180px;
  height: 60px;
`;

const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 899px) {
    display: none;
  }

  @media (min-width: 900px) {
    overflow: hidden;
    height: ${({ isVisible }) => (isVisible ? '100%' : '0')};
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: all 0.3s ease-in-out;
  }
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition: 200ms ease-in-out;
  padding: 0.5rem;
  border-radius: 10px 0 10px 0;
  position: relative;

  &:hover {
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
  display: ${({ show }) => (show ? 'block' : 'none')};
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1d28f2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: #138af2;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 2px solid #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  &:hover {
  border: 2px #1d28f2;
  }  
  &::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #ffffff 3px, transparent 3px);
    background-size: 8px 8px;
    background-position: 0 0, 8px 8px;
  }

  @media (max-width: 899px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 899px) {
    display: block;
    margin-left: 10px;
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
  }
`;

const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: #3a60cf;
    font-weight: bold;
  }
`;

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [navItemsVisible, setNavItemsVisible] = useState(true);
  const [activeNavLink, setActiveNavLink] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [partnersDropdownOpen, setPartnersDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const partnersDropdownRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setActiveNavLink(location.pathname);
  }, [location]);

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
    if (partnersDropdownRef.current && !partnersDropdownRef.current.contains(event.target)) {
      setPartnersDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNavItems = () => {
    setNavItemsVisible(!navItemsVisible);
  };

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLogo to="/">
            <Logo src="../.././img/logo5.png" alt="Logo" />
          </NavbarLogo>
        </LeftContainer>

        <NavItemsContainer isVisible={navItemsVisible}>
          <NavbarLink to="/projects" className={activeNavLink === "/projects" ? "active" : ""}>Projects</NavbarLink>
          <NavbarLink to="/achievements" className={activeNavLink === "/achievements" ? "active" : ""}>Achievements</NavbarLink>
          <NavbarLink to="#" className={activeNavLink === "/events" ? "active" : ""} onClick={handleDropdownToggle}>
            Events
            <DropdownMenu ref={dropdownRef} show={dropdownOpen}>
              <DropdownItem to="/techx">TechXcelerate</DropdownItem>
              <DropdownItem to="/nsos">nameSpace Season of Open Source</DropdownItem>
              <DropdownItem to="/algorena">Algorena</DropdownItem>
              <DropdownItem to="/hackhazards">HACKHAZARDS</DropdownItem>
              <DropdownItem to="/events">All Events</DropdownItem>
            </DropdownMenu>
          </NavbarLink>
          <NavbarLink to="/programs" className={activeNavLink === "/programs" ? "active" : ""}>Programs</NavbarLink>
          <NavbarLink to="/team" className={activeNavLink === "/team" ? "active" : ""}>Team</NavbarLink>
          <NavbarLink to="/resources" className={activeNavLink === "/resources" ? "active" : ""}>Resources</NavbarLink>
          <NavbarLink to="http://blog.namespacecomm.in/" target="_blank" rel="noreferrer" className={activeNavLink === "/http://blog.namespacecomm.in/" ? "active" : ""}>Blog</NavbarLink>
          <NavbarLink to="#" className={activeNavLink === "/partners" ? "active" : ""} onClick={handlePartnersDropdownToggle}>
            Partner with us
            <DropdownMenu ref={partnersDropdownRef} show={partnersDropdownOpen}>
              <DropdownItem as="a" href="https://lush-bugle-f9b.notion.site/The-nameSpace-Community-Partnership-Program-2024-25-03b7367a954e4a96b5a3ced32af14fca" target="_blank" rel="noopener noreferrer">
                Become a Community Partner
              </DropdownItem>
              <DropdownItem to="/campusevangelist">Become a Campus Evangelist</DropdownItem>
            </DropdownMenu>
          </NavbarLink>
          <NavbarLink to="/CodingChallenge" className={activeNavLink === "/CodingChallenge" ? "active" : ""}>Coding Challenge</NavbarLink>
        </NavItemsContainer>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://linktr.ee/namespacecomm" target="_blank" rel="noreferrer">
            <Button>Connect with us</Button>
          </a>
          <ToggleButton onClick={toggleNavItems} className={navItemsVisible ? 'active' : ''} />
          <HamburgerContainer>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </HamburgerContainer>
        </div>
      </NavbarInnerContainer>

      {isOpen && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/events">Events</NavbarLinkExtended>
          <NavbarLinkExtended to="/programs">Programs</NavbarLinkExtended>
          <NavbarLinkExtended to="/team">Team</NavbarLinkExtended>
          <NavbarLinkExtended to="/resources">Resources</NavbarLinkExtended>
          <NavbarLinkExtended to="http://blog.namespacecomm.in/" target="_blank" rel="noreferrer">Blog</NavbarLinkExtended>
          <NavbarLinkExtended to="/techx">TechXcelerate</NavbarLinkExtended>
          <NavbarLinkExtended to="/nsos">nameSpace Season of Open Source</NavbarLinkExtended>
          <NavbarLinkExtended to="/algorena">Algorena</NavbarLinkExtended>
          <NavbarLinkExtended to="/hackhazards">HACKHAZARDS</NavbarLinkExtended>
          <NavbarLinkExtended to="https://lush-bugle-f9b.notion.site/The-nameSpace-Community-Partnership-Program-2024-25-03b7367a954e4a96b5a3ced32af14fca" target="_blank" rel="noreferrer">Become a Community Partner</NavbarLinkExtended>
          <NavbarLinkExtended to="/campusevangelist">Become a Campus Evangelist</NavbarLinkExtended>
          <NavbarLinkExtended to="/codingchallenge">Coding Challenge</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}