import styled from "styled-components";
import About from "./Sections/About/About";
import Hero from "./Sections/Hero/Hero";
import Teams from "./Sections/Teams/Teams";
import Events from "./Sections/Events/Events";
import Testimonials from "./Sections/Testimonials/Testimonials";
import Contact from "./Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Container = styled.div`
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Hero />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
