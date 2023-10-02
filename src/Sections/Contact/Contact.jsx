import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  ${
    "" /* background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  background-color: #010116;
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  @media only screen and (min-width: 1080px) {
    margin-top: 2rem 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 1030px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
  font-style: italic;
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  color: black;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: black;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #1d28f2; /* fallback for old browsers */

  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: relative;
  top: 20;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1030px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email || !message) {
      setSuccess(false);
      setFormMessage("Fields cannot be empty :(");
      return;
    }
    emailjs
      .sendForm(
        "nscc_website_contactpage",
        "template_o142frd",
        ref.current,
        process.env.REACT_APP_API
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setFormMessage("Your message has been sent. We'll get back to you soon :)");
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" onChange={(e) => setName(e.target.value)}/>
            <Input placeholder="Email" name="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">Send</Button>
            {formMessage}
          </Form>
        </Left>
        <Right>
          {/* <Img src="https://lottie.host/?file=296dc031-e4f0-41d3-b9ee-6099c53fbd8b/tfupnzO1qe.json"></Img> */}
          <Img src="./img/contact.svg"></Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
