import styled from "styled-components";
import About from "./components/About/About";
import Hero from "./components/Hero";
import Teams from "./components/Teams/Teams";
import Events from "./components/Events/Events";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

const Container = styled.div`
  ${'' /* height: 100vh; */}
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  color: white;
  
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
    <Events />
    <Testimonials />
    </Container>
    </>
  );
}

export default App;
