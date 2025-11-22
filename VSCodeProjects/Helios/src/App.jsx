import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Foundry from "./pages/Foundry";
import Projects from "./pages/Projects";
import TurtleBeta from "./pages/TurtleBeta";
import PelicanBeta from "./pages/PelicanBeta";
import BelugaBeta from "./pages/BelugaBeta";
import BeaverBeta from "./pages/BeaverBeta";
import JoinOurMission from "./pages/JoinOurMission";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundry" element={<Foundry />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/turtle-beta" element={<TurtleBeta />} />
        <Route path="/pelican-beta" element={<PelicanBeta />} />
        <Route path="/beluga-beta" element={<BelugaBeta />} />
        <Route path="/beaver-beta" element={<BeaverBeta />} />
        <Route path="/join-our-mission" element={<JoinOurMission />} />
      </Routes>
    </Layout>
  );
}

export default App;
