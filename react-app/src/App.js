import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Servicos from './components/servicos/Servicos'
import Reparos from './components/reparo/Reparos'
import QuemSomos from './components/quemsomos/QuemSomos'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicos />
      <QuemSomos />
      <Reparos />
      <Footer />
    </div>
  );
}

export default App;