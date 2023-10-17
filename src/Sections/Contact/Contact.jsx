import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
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
  font-weight: 600;
  color: #fff;
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
  background-color: #14102E;
  border: none;
  color: #fff;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #14102E;
`;

const Button = styled.button`
  background-color: #1d28f2;
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

const SuccessMessage = styled.p`
  color: green;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Contact = () => {
  const ref = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSuccess(false);
      setFormMessage("Input Fields cannot be empty :(");
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
          setFormData({ name: "", email: "", message: "" });
          setSuccess(true);
          setFormMessage("Your message has been sent. We'll get back to you soon :)");

          setTimeout(() => {
            setSuccess(null);
            setFormMessage("");
          }, 2000);
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
            <Input
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              autoComplete="off"
            />
            <Input
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              autoComplete="off"
            />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
              onChange={handleChange}
              value={formData.message}
            />
            <Button type="submit">Send</Button>
            {success === false && <ErrorMessage>{formMessage}</ErrorMessage>}
          </Form>
          {success === true && <SuccessMessage>{formMessage}</SuccessMessage>}
        </Left>
        <Right>
          <Img src="./img/contact.svg" alt="Contact Illustration" />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
