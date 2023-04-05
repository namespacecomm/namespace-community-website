import styled from "styled-components";

const CARD = styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    background: rgb(9,9,121);
background: linear-gradient(262deg, rgba(9,9,121,1) 0%, rgba(2,0,36,1) 1%);
color:white;
  }
`;

const Image = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const TEXT = styled.h4`
  color: black;
  padding: 0 calc(1rem + 1vw);

  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
  @media only Screen and (max-width: 40em) {
    color: white;
  }
`;

const NAME = styled.h3`
  color: black;
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
  @media only Screen and (max-width: 40em) {
    color: white;
  }
`;

const Card = ({ name, text, image,postion }) => {
 // const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <Image img={image} width="400" height="400" />
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
      <TEXT>{postion}</TEXT>
    </CARD>
  );
};

export default Card;