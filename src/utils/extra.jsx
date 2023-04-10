// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Section = styled.div`
//   display: flex;
//   justify-content: center;
//   z-index: 9999999;
//   @media only screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const Container = styled.div`
//   width: 1400px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   padding: 10px 0px;

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     padding: 10px;
//   }
// `;

// const Links = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;
// `;

// const Logo = styled.img`
//   height: 50px;
// `;

// const List = styled.ul`
//   display: flex;
//   gap: 30px;
//   list-style: none;
//   @media only screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const ListItem = styled.li`
//   cursor: pointer;
//   font-size: 20px;
// `;

// const Icons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const Icon = styled.img`
//   width: 20px;
//   cursor: pointer;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #1d28f2;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Navbar = () => {
//   return (
//     <Section>
//       <Container>
//         <Links>
//           <Logo src="./img/logo2.png" />
//           <List>
//             <Link to="/">
//               <ListItem>Home</ListItem>
//             </Link>
//             <ListItem>Projects</ListItem>
//             <ListItem>Events</ListItem>
//             <Link to="team">
//               <ListItem>Team</ListItem>
//             </Link>
//           </List>
//         </Links>
//         <Icons>
//           <Button>Join CodeRush</Button>
//         </Icons>
//       </Container>
//     </Section>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import styled from "styled-components";

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   z-index: 999999;
//   align-items: center;
//   color: #ffffff;
//   padding: 10px;

// `;

// const NavbarLogo = styled.h1`
//   font-size: 24px;
// `;

// const NavbarLinks = styled.div`
//   display: flex;

//   ${'' /* @media (max-width: 768px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   } */}

//   list-style: none;
// `;

// const NavbarLink = styled.div`
//   margin-right: 20px;

//   &:first-child {
//     margin-left: 0;
//   }

//   a {
//     color: #fff;
//     text-decoration: none;
//     font-size: 18px;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const NavbarToggle = styled.div`
//   display: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const NavbarMenu = styled.div`
//   display: flex;

//   @media (max-width: 768px) {
//     flex-direction: row;

//     position: absolute;
//     top: 50px;
//     left: 0;
//     right: 0;
//     padding: 10px;
//     display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
//   }
// `;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <NavbarContainer>
//       <NavbarLogo>Logo</NavbarLogo>
//       <NavbarToggle onClick={toggleMenu}>
//         <span>&#9776;</span>
//       </NavbarToggle>
//       <NavbarMenu isOpen={isOpen}>
//         <NavbarLinks>
//           <NavbarLink>
//             <a href="#">Home</a>
//           </NavbarLink>
//           <NavbarLink>
//             <a href="#">Projects</a>
//           </NavbarLink>
//           <NavbarLink>
//             <a href="#">Events</a>
//           </NavbarLink>
//           <NavbarLink>
//             <a href="#">Team</a>
//           </NavbarLink>
//         </NavbarLinks>
//       </NavbarMenu>
//     </NavbarContainer>
//   );
// };

// export default Navbar;