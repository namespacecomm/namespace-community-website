import styled from "styled-components";

const Section = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    color: white;
    transition: all 0.2s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
`;

const Footer = () => {
  return (
    <Section>
      <LeftText>
        © 2023
        <a href="">
          @NSCC BPIT
        </a>
      </LeftText>
      <RightText>
        Reach out to us via 😉
        <a href="">
          <img src="./img/twit.svg" alt="Twitter" />
        </a>
        &nbsp;
        <a href="">
          <img src="./img/insta.svg" alt="Instagram" />
        </a>
        &nbsp;
        <a href="mailto:Apna_mail?subject=Email From Your Website">
          <img src="./img/email.svg" alt="Gmail" />
        </a>
      </RightText>
    </Section>
  );
};

export default Footer;
