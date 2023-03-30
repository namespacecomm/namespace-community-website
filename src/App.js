import styled from "styled-components";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar/Navbar";


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
    </>
  );
}

export default App;
