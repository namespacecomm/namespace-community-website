import styled from "styled-components";
import About from "./components/About/About";
import Hero from "./components/Hero";
import Teams from "./components/Teams/Teams";
import Navbar from "./components/Navbar/Navbar";

const Container = styled.div`
  ${'' /* height: 100vh; */}
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
    <About />
    <Teams />
    </Container>
    </>
  );
}

export default App;
