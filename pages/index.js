import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Simple() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
