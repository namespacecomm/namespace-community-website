import {React,useState} from "react";
import faqData from "./faqData";
import styled from "styled-components";

function Faq() {
const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;

const FaqCard = styled.div`

  
  padding: 5px;
  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%; /* adjust the width to your liking */
`;

const FaqItem = styled.div`
 padding:10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%; /* adjust the width to your liking */
  margin-bottom: 30px;
`;

const FaqItemButton = styled.button`

    
  background-color: blue;
  color: #fff;
  border: none;
  width: 130%;
  padding: 20px 25px;
  font-size: 20px;
  cursor: pointer;
   border-radius: 20px;
  margin: 0 auto; /* add this to center the button horizontally */
  text-align: center; /* add this to center the text inside the button */
 &:hover {
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.5), 0 0 20px rgba(128, 128, 128, 0.5), 0 0 30px rgba(128, 128, 128, 0.5), 0 0 40px rgba(128, 128, 128, 0.5);
    transition: box-shadow 0.3s ease-in-out;
  }

`;

const FaqItemButtonHover = styled(FaqItemButton)`
  background-color: light-blue;
`;

const FaqItemDiv = styled.div`
margin-top: 20px;
  padding: 40px;
   font-size: 20px;
  border-bottom: 1px solid #ddd;

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