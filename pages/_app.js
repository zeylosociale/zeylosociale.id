import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Head from 'next/head';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          content="width=device-width, initiFal-scale=1.0"
          name="viewport"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
