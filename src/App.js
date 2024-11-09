import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AllEvents from "./Pages/AllEvents/AllEvents";
import { Web } from "./Pages/AllResources/Web";
import { HTML } from "./Pages/AllResources/webALL/html";
import { Github } from "./Pages/AllResources/webALL/github";
import { PHP } from "./Pages/AllResources/webALL/php";
import { CSS } from "./Pages/AllResources/webALL/css";
import { ANSIBLE } from "./Pages/AllResources/devopsALL/ansible";
import { TERRAFORM } from "./Pages/AllResources/devopsALL/terraform";
import { DOCKER } from "./Pages/AllResources/devopsALL/docker";
import { DigitalOcean } from "./Pages/AllResources/devopsALL/digitalocean";
import { IBM } from "./Pages/AllResources/devopsALL/ibm-cloud";
import { HEROKU } from "./Pages/AllResources/devopsALL/heroku";
import { KUBERNETES } from "./Pages/AllResources/devopsALL/kubernetes";
import { JENKINS } from "./Pages/AllResources/devopsALL/jenkins";
import { CompProg } from "./Pages/AllResources/CompProg";
import { Javascript } from "./Pages/AllResources/webALL/javascript";
import { Nodejs } from "./Pages/AllResources/webALL/nodejs";
import { Firebase } from "./Pages/AllResources/webALL/firebase";
import AllTeams from "./Pages/AllTeams/AllTeams";
import Resources from "./Pages/Resources/Resources";
import Hero from "./Sections/Hero/Hero";
import DataScience from "./Pages/dataScience/DataScience";
import Python from "./Pages/pyresource/python";
import MLOps from "./Pages/mlops/mlops";
import NotFound from "./Pages/Error/NotFound";
import Android from "./Pages/AllResources/Android";
import ARVR from "./Pages/AllResources/ARVR";
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
import Azure from "./Pages/AllResources/Azure";
import { Gcp } from "./Pages/AllResources/devopsALL/Gcp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CyberSecurity } from "./Pages/AllResources/CyberSecurity";
import ReactNative from "./Pages/AllResources/ReactNative";
import Native from "./Pages/AllResources/Native";
import { NLP } from "./Pages/AllResources/aimlAll/NLP";
import { RL } from "./Pages/AllResources/aimlAll/RL";
import { DL } from "./Pages/AllResources/aimlAll/DL";
import { MYSQL } from "./Pages/AllResources/webALL/mysql";
import { Django } from "./Pages/AllResources/webALL/django";
import { Express } from "./Pages/AllResources/webALL/express";
import AugmentedReality from "./Pages/AllResources/arvrAll/AugmentedReality";
import { VirtualReality } from "./Pages/AllResources/arvrAll/VirtualReality";
import { MixedReality } from "./Pages/AllResources/arvrAll/MixedReality";
import { Unity3D } from "./Pages/AllResources/arvrAll/Unity3D";
import { WebXR } from "./Pages/AllResources/arvrAll/WebXR";
import { ComputerVision } from "./Pages/AllResources/aimlAll/ComputerVision";
import { UIUX } from "./Pages/AllResources/uiux";
import { Figma } from "./Pages/AllResources/uiuxALL/Figma";
import Cryptocurrency from "./Pages/AllResources/blockChainCards/Cryptocurrency";
import Supplychain from "./Pages/AllResources/blockChainCards/Supplychain";
import Decentralized from "./Pages/AllResources/blockChainCards/Decentralized";
import Ethereum from "./Pages/AllResources/blockChainCards/Ethereum";
import { Hyperledger } from "./Pages/AllResources/blockChainCards/Hyperledger";
import Truffle from "./Pages/AllResources/blockChainCards/Truffle";
import Dsa from "./Pages/AllResources/Dsa/Dsa";
import { Rust } from "./Pages/AllResources/blockChainCards/Rust";
import { Solidity } from "./Pages/AllResources/blockChainCards/Solidity";
import Mathematics from "./Pages/AllResources/datasciencecards/Mathematics";
import { Numpy } from "./Pages/AllResources/aimlAll/Numpy";
import { Tensorflow } from "./Pages/AllResources/aimlAll/Tensorflow";
import IOTappindus from "./Pages/AllResources/IOTall/iotappindus";
import { PyTorch } from "./Pages/AllResources/aimlAll/PyTorch";
import { Keras } from "./Pages/AllResources/aimlAll/Keras";
import Statistics from "./Pages/AllResources/datasciencecards/Statistics";
import IOTdaci from "./Pages/AllResources/IOTall/iotdaci";
import IOThd from "./Pages/AllResources/IOTall/iothd";
import IOTsd from "./Pages/AllResources/IOTall/iotsd";
import Pandas from "./Pages/AllResources/aimlAll/Pandas";
import { GITLAB } from "./Pages/AllResources/devopsALL/gitlab";
import Matplotlib from "./Pages/AllResources/aimlAll/Matplotlib";
import { SKETCH } from "./Pages/AllResources/uiuxALL/sketch";
import { ADOBE } from "./Pages/AllResources/uiuxALL/adobe";
import Scikit from "./Pages/AllResources/aimlAll/Scikit-learn";
import { NETLIFY } from "./Pages/AllResources/webALL/netlify";
import SortAlgo from "./Pages/AllResources/compProgALL/sortalgo";
import SearchAlgo from "./Pages/AllResources/compProgALL/searchalgo";
import DpAlgo from "./Pages/AllResources/compProgALL/dynamicpro";
import { ORACLECLOUD } from "./Pages/AllResources/devopsALL/oracle-cloud";
import TechX from "./Pages/TechXcelerate/Techx";
import Hackhazards from "./Pages/Hackhazards/Hackhazards";
import CampusEvangelist from "./Pages/CampusEvangelist/CampusEvangelist";
import CommunityPartner from "./Pages/CommunityPartner/CommunityPartner";
import Sponsor from "./Pages/Sponsor/Sponsor";
import Certificates from "./Pages/Certificates/Certificates";
import CertificateGenerator from "./Pages/Certificates/CertificateGenerator";
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
      <Container className="overflow-x-hidden">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Hero />} />
              <Route path="team" element={<AllTeams />} />
              <Route path="events" element={<AllEvents />} />
              <Route path="resources" element={<Resources />} />
              <Route path="techx" element={<TechX />} />
              <Route path="hackhazards" element={<Hackhazards />} />
              <Route path="sponsor" element={<Sponsor />} />
              <Route path="campusevangelist" element={<CampusEvangelist />} />
              <Route path="communitypartner" element={<CommunityPartner />} />
              <Route path="webd" element={<Web />} />
              <Route path="cp" element={<CompProg />} />
              <Route path="sortalgo" element={<SortAlgo />} />
              <Route path="searchalgo" element={<SearchAlgo />} />
              <Route path="dynamicpro" element={<DpAlgo />} />
              <Route path="pyresource" element={<Python />} />
              <Route path="mlops" element={<MLOps />} />
              <Route path="android" element={<Android />} />
              <Route path="iot" element={<Iot />} />
              <Route path="flutter" element={<Flutter />} />
              <Route path="reactnative" element={<ReactNative />} />
              <Route path="native" element={<Native />} />
              <Route path="aiml" element={<AIML />} />
              <Route path="aws" element={<Aws />} />
              <Route path="azure" element={<Azure />} />
              <Route path="gcp" element={<Gcp />} />
              <Route path="cybersecurity" element={<CyberSecurity />} />
              <Route path="css" element={<CSS />} />
              <Route path="html" element={<HTML />} />
              <Route path="git" element={<Github />} />
              <Route path="js" element={<Javascript />} />
              <Route path="nlp" element={<NLP />} />
              <Route path="RL" element={<RL />} />
              <Route path="DL" element={<DL />} />
              <Route path="pandas" element={<Pandas />} />
              <Route path="computer-vision" element={<ComputerVision />} />
              <Route path="numpy" element={<Numpy />} />
              <Route path="tensorflow" element={<Tensorflow />} />
              <Route path="PyTorch" element={<PyTorch />} />
              <Route path="matplotlib" element={<Matplotlib />} />
              <Route path="scikit-learn" element={<Scikit />} />
              <Route path="Keras" element={<Keras />} />
              <Route path="nodejs" element={<Nodejs />} />
              <Route path="php" element={<PHP />} />
              <Route path="netlify" element={<NETLIFY />} />
              <Route path="firebase" element={<Firebase />} />
              <Route path="oracle-cloud" element={<ORACLECLOUD />} />
              <Route path="frontend-framework" element={<FrontEndFramework />} />
              <Route path="css-framework" element={<CSSFramework />} />
              <Route path="devops" element={<DevOps />} />
              <Route path="ansible" element={<ANSIBLE />} />
              <Route path="gitlab" element={<GITLAB />} />
              <Route path="terraform" element={<TERRAFORM />} />
              <Route path="docker" element={<DOCKER />} />
              <Route path="digitalocean" element={<DigitalOcean />} />
              <Route path="ibm-cloud" element={<IBM />} />
              <Route path="iothd" element={<IOThd />} />
              <Route path="iotsd" element={<IOTsd />} />
              <Route path="iotappindus" element={<IOTappindus />} />
              <Route path="iotdaci" element={<IOTdaci />} />
              <Route path="kubernetes" element={<KUBERNETES />} />
              <Route path="jenkins" element={<JENKINS />} />
              <Route path="heroku" element={<HEROKU />} />

              <Route path="certificate" element={<Certificates />} />
              <Route path="certificate/:eventId" element={<CertificateGenerator/>} />

              {/* Routes related to BLOCKCHAIN PATHS */}
              <Route path="blockchain">
                <Route index element={<Blockchain />} />

                <Route path="cryptocurrency" element={<Cryptocurrency />} />
                <Route
                  path="supply-chain-management"
                  element={<Supplychain />}
                />
                <Route path="defi" element={<Decentralized />} />
                <Route path="ethereum" element={<Ethereum />} />
                <Route path="Rust" element={<Rust />} />
                <Route path="hyperledger-fabric" element={<Hyperledger />} />
                <Route path="truffle" element={<Truffle />} />
                <Route path="Solidity" element={<Solidity />} />
              </Route>

              {/* Routes related to DataScience PATHS */}
              <Route path="dataScience">
                <Route index element={<DataScience />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="deeplearning" element={<DeepLearning />} />
                <Route path="mathematics" element={<Mathematics />} />
              </Route>

              <Route path="*" element={<NotFound />} />
              <Route path="mongodb" element={<MongoDB />} />
              <Route path="mysql" element={<MYSQL />} />
              <Route path="django" element={<Django />} />
              <Route path="expressjs" element={<Express />} />

              {/* Routes related to AR/VR Development paths */}

              <Route path="arvr">
                <Route index element={<ARVR />} />
                <Route
                  path="augmented-reality"
                  element={<AugmentedReality />}
                />
                <Route path="virtual-reality" element={<VirtualReality />} />
                <Route path="mixed-reality" element={<MixedReality />} />
                <Route path="unity3d" element={<Unity3D />} />
                <Route path="webxr" element={<WebXR />} />
              </Route>

              {/* competitive programming  */}

              <Route path="uiux" element={<UIUX />} />
              <Route path="adobe" element={<ADOBE />} />
              <Route path="figma" element={<Figma />} />
              <Route path="sketch" element={<SKETCH />} />
            </Route>

            <Route path="dsa" element={<Dsa />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
