import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Faq from "../Faq/Faq";
import Modal from "./Modal";

const Section = styled.div`
  background-color: #010116;
  height: 80vh;
  width: 100%;
  margin-top: 40vh;
  scroll-snap-align: center;
  @media only screen and (min-width: 1080px) {
  }
`;

const Container = styled.div`
  width: 100%;
  height: 60%;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #14102e;
  border: none;
  color: #fff;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #14102e;
  resize: none;
`;

const Button = styled.button`
  background-color: #1d28f2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 auto;
  width: 100%;
  padding: 0.5em;
  transition: 200ms ease-in-out;
  :hover {
    background-color: #138af2;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
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
  text-align: center;
  color: green;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: red;
`;

const Contact = () => {
  const ref = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      setFormMessage("Name cannot be empty.");
      setSuccess(false);
      setShowModal(true);
      return;
    }

    if (!formData.email) {
      setFormMessage("Email cannot be empty.");
      setSuccess(false);
      setShowModal(true);
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormMessage("Please enter a valid email.");
      setSuccess(false);
      setShowModal(true);
      return;
    }

    if (!formData.message) {
      setFormMessage("Message cannot be empty.");
      setSuccess(false);
      setShowModal(true);
      return;
    }

    setLoading(true);

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
          setFormMessage(
            "Your message has been sent. We'll get back to you soon :)"
          );
          setShowModal(true);
          setLoading(false);

          setTimeout(() => {
            setSuccess(null);
            setFormMessage("");
            setShowModal(false); // Hide the modal after timeout
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setFormMessage("There was an error sending your message. Try again.");
          setShowModal(true);
          setLoading(false);
        }
      );
  };

  return (
    <div className="mt-[105px] !important">
      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
        Frequently Asked{" "}
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          <a href="#">Questions</a>
        </span>
      </h2>
      <Faq />

      <Section>
        <Container>
          <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
              {success === false && <ErrorMessage>{formMessage}</ErrorMessage>}
              {success === true && <SuccessMessage>{formMessage}</SuccessMessage>}
              <Title>Contact Us</Title>
              <Input
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                autoComplete="off"
                required={true}
                aria-label="Name"
              />
              <Input
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                autoComplete="off"
                required={true}
                aria-label="Email"
              />
              <TextArea
                placeholder="Write your message"
                name="message"
                rows={10}
                onChange={handleChange}
                value={formData.message}
                required={true}
                aria-label="Message"
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>
              {showModal && (
                <Modal
                  message={formMessage}
                  onClose={() => setShowModal(false)}
                />
              )}
            </Form>
          </Left>
          <Right>
            <Img src="./img/contact.svg" alt="Contact Illustration" />
          </Right>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
