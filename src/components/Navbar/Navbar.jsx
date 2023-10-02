import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 95%;
  height: ${(props) => (props.extendNavbar ? "50vh" : "80px")};
  ${"" /* background-color: black; */}
  display: flex;
  z-index: 99999999;
  padding: 15px 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 50px;
`;

const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 5%;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
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
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
    align-self: center;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
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
  @media (max-width: 700px) {
    display: none;
  }
`;

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src="./img/logo2.png" alt="logo"></Logo>
          {/* <NavbarLink to="/">NSCC</NavbarLink> */}
          <NavbarLink to="/"> Home</NavbarLink>
          <NavbarLink to="/projects">Projects</NavbarLink>
          <NavbarLink to="/events">Events</NavbarLink>
          <NavbarLink to="/team">Team</NavbarLink>
          <NavbarLink to="/resources">Resources</NavbarLink>
          <NavbarLink to="http://blog.nsccbpit.tech/">Blog</NavbarLink>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <a href="https://linktr.ee/nscc_bpit">
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
