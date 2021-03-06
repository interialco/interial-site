import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  AboutInfo,
  ContactUsInfo,
  DiscoverInfo,
} from '../components/InfoSection/Data';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...AboutInfo} />
      <InfoSection {...DiscoverInfo} />
      <Services></Services>
      <InfoSection {...ContactUsInfo} />
      <Footer />
    </>
  );
};

export default Home;
