import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Servicos from './components/servicos/Servicos';
import Reparos from './components/reparo/Reparos';
import QuemSomos from './components/quemsomos/QuemSomos';
import OrcamentoForm from './pages/forms/OrcamentoForm';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicos />
      <QuemSomos />
      <Reparos />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orcamento" element={
          <>
            <Navbar />
            <OrcamentoForm />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
