import Benefit from '../components/Benefit';
import About from '../components/About';
import Hero from '../components/Hero';
import Head from 'next/head';
import React from 'react';


export default function Index() {
  return (
    <>
      <Head>
        <title>Zeylosociale.id - Jasa Optimasi Sosial Media Terbaik</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Hero />
      <Benefit />
      <About />
    </>
  );
}
