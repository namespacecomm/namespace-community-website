import styled from "styled-components";
import About from "./components/About/About";
import Hero from "./components/Hero";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  color: white;
  background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <>
    <Container>
     <div>
      <Hero />
     </div>
    </Container>
    <Container>
    <About />
    </Container>
    </>
  );
}

export default App;
