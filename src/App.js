import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AllEvents from "./Pages/AllEvents/AllEvents";
import { Web } from "./Pages/AllResources/Web";
import { HTML } from "./Pages/AllResources/webALL/html";
import { Github } from "./Pages/AllResources/webALL/github";
import { PHP } from "./Pages/AllResources/webALL/php";
import { CSS } from "./Pages/AllResources/webALL/css";
import { DOCKER } from "./Pages/AllResources/devopsALL/docker";
import { KUBERNETES } from "./Pages/AllResources/devopsALL/kubernetes";
import { JENKINS } from "./Pages/AllResources/devopsALL/jenkins";
import { CompProg } from "./Pages/AllResources/CompProg";
import { Javascript } from "./Pages/AllResources/webALL/javascript";
import { Nodejs } from "./Pages/AllResources/webALL/nodejs";
import { Firebase } from "./Pages/AllResources/webALL/firebase";
import AllTeams from "./Pages/AllTeams/AllTeams";
import Projects from "./Pages/Projects/Projects";
import Resources from "./Pages/Resources/Resources";
import Hero from "./Sections/Hero/Hero";
import DataScience from "./Pages/dataScience/DataScience";
import NotFound from "./Pages/Error/NotFound";
import { Android } from "./Pages/AllResources/Android";
import ARVR from "./Pages/AllResources/ARVR";
import Programs from "./Pages/Programs/Programs";
import Iot from "./Pages/AllResources/Iot";
import AIML from "./Pages/AllResources/AIML";
import Flutter from "./Pages/AllResources/Flutter";
import { DevOps } from "./Pages/AllResources/Devops";
import Blockchain from "./Pages/AllResources/Blockchain";
import { FrontEndFramework } from "./Pages/AllResources/webALL/frontend-framework";
import { DeepLearning } from "./Pages/AllResources/Deeplearning";
import { CSSFramework } from "./Pages/AllResources/CSSFramework";
import { MongoDB } from "./Pages/AllResources/webALL/mongodb";
import Aws from "./Pages/AllResources/Aws";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ReactNative from "./Pages/AllResources/ReactNative";
import { NLP } from "./Pages/AllResources/aimlAll/NLP";
import { MYSQL } from "./Pages/AllResources/webALL/mysql";
import { Django } from "./Pages/AllResources/webALL/django";
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
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Hero />} />
              <Route path="team" element={<AllTeams />} />
              <Route path="events" element={<AllEvents />} />
              <Route path="programs" element={<Programs />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resources" element={<Resources />} />
              <Route path="webd" element={<Web />} />
              <Route path="cp" element={<CompProg />} />
              <Route path="dataScience" element={<DataScience />} />
              <Route path="arvr" element={<ARVR />} />
              <Route path="android" element={<Android />} />
              <Route path="iot" element={<Iot />} />
              <Route path="flutter" element={<Flutter />} />
              <Route path="reactnative" element={<ReactNative />} />
              <Route path="aiml" element={<AIML />} />
              <Route path="aws" element={<Aws />} />
              <Route path="css" element={<CSS />} />
              <Route path="html" element={<HTML />} />
              <Route path="git" element={<Github />} />
              <Route path="js" element={<Javascript />} />
              <Route path="nlp" element={<NLP />} />
              <Route path="nodejs" element={<Nodejs />} />
              <Route path="php" element={<PHP />} />
              <Route path="firebase" element={<Firebase />} />
              <Route path="deeplearning" element={<DeepLearning />} />
              <Route
                path="frontend-framework"
                element={<FrontEndFramework />}
              />
              <Route path="css-framework" element={<CSSFramework />} />
              <Route path="devops" element={<DevOps />} />
              <Route path="docker" element={<DOCKER />} />
              <Route path="kubernetes" element={<KUBERNETES />} />
              <Route path="jenkins" element={<JENKINS />} />
              <Route path="Blockchain" element={<Blockchain />} />
              <Route path="*" element={<NotFound />} />
              <Route path="mongodb" element={<MongoDB />} />
              <Route path="mysql" element={<MYSQL />} />
              <Route path="django" element={<Django />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
