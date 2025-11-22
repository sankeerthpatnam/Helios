import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Foundry from './pages/Foundry.jsx';
import Projects from './pages/Projects.jsx';
import TurtleBeta from './pages/TurtleBeta.jsx';
import PelicanBeta from './pages/PelicanBeta.jsx';
import BelugaBeta from './pages/BelugaBeta.jsx';
import BeaverBeta from './pages/BeaverBeta.jsx';
import JoinOurMission from './pages/JoinOurMission.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
}

export default App;
