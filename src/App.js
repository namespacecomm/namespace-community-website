import styled from "styled-components";
import Hero from "./Sections/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTeams from "./Pages/AllTeams/AllTeams";
import AllEvents from "./Pages/AllEvents/AllEvents";
import Projects from "./Pages/Projects/Projects";
import Resources from "./Pages/Resources/Resources";

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
              <Route path='team' element={<AllTeams />} />
              <Route path='events' element={<AllEvents />} />
              <Route path='projects' element={ <Projects /> } />
              <Route path='resources' element={ <Resources /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;