import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portofolio from './components/portofolio/Portofolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <About />
      <Experience />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
