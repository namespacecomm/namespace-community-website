import { useState } from "react";
import styled from "styled-components";
import faqData from "./faqData";

function Faq() {
  const FaqContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    flex-direction: column;
    padding: 0 20px;
    color: #fff; /* Light text color */
    @media (max-width: 768px) {
      padding: 0 10px;
    }
  `;

  const FaqCard = styled.div`
    width: 70%;
    max-width: 900px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4); /* Deeper shadow */
    background-color: #0f1823; /* Darker card background */
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px); /* Slight lift on hover */
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
    }

    @media (max-width: 768px) {
      width: 90%;
      padding: 15px;
    }
  `;

  const FaqItem = styled.div`
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #162028; /* Darker background for individual items */
    transition: all 0.3s ease;
  `;

  const FaqItemButton = styled.button`
    background-color: #1f3a7a; /* Darker button background color */
    color: #fff; /* Light text color */
    width: 100%;
    padding: 15px;
    text-align: left;
    font-size: 18px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: #2a4f93; /* Darken on hover */
      box-shadow: inset 0 0 10px rgba(57, 127, 243, 0.3); /* Glow effect */
    }

    &::after {
      content: "\\25BC"; /* Down arrow */
      font-size: 12px;
      transform: rotate(${({ isActive }) => (isActive ? "180deg" : "0deg")});
      transition: transform 0.3s ease;
    }
  `;

  const FaqItemDiv = styled.div`
    background-color: #1e3c75; /* Darker background color for answer */
    color: #fff; /* Light text color */
    padding: 20px;
    font-size: 16px;
    border-top: 1px solid #397FF3; /* Keep original border color */
    animation: fadeIn 0.5s ease-in-out;
    border-radius: 0 0 10px 10px;
    text-align: left; /* Justify text for the answer */

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
      @media (max-width: 768px) {
      padding: 15px;
      font-size: 14px;
    }
  `;

  const [activeStates, setActiveStates] = useState({});

  const toggleAnswer = (id) => {
    setActiveStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id], // Toggle the state for the clicked FAQ
    }));
  };

  return (
    <FaqContainer>
      <FaqCard>
        {faqData.map((faq) => (
          <FaqItem key={faq.id}>
            <FaqItemButton onClick={() => toggleAnswer(faq.id)}>
              {faq.question}
            </FaqItemButton>
            {activeStates[faq.id] && <FaqItemDiv>{faq.answer}</FaqItemDiv>}
          </FaqItem>
        ))}
      </FaqCard>
    </FaqContainer>
  );
}

export default Faq;
