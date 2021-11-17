import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

config.autoAddCss = false;

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
      <ChakraProvider theme={theme}>
        <Navbar />
        <NextSeo
          openGraph={{
            type: 'article',
            locale: 'id_ID',
            title: 'Jual Followers Instagram - Aktif Indonesia - Zeylosociale.id',
            description:
              'Jasa optimasi sosial media untuk mengembangkan bisnis anda. Jual followers Instagram, 1000 Followers cuma 85.000 Rupiah, tanpa password. Real Aktif Indonesia. dapatkan layanan lain hanya di website kami',
            url: 'https://zeylosociale.com',
            site_name: 'zeylosociale.com',
            images: [
              {
                url: 'https://github.com/zeylosociale/zeylosociale.id/blob/main/public/img/zeylosociale-bg.png',
                width: 1200,
                height: 1200,
                alt: 'Image'
              }
            ]
          }}
          twitter={{
            handle: 'twitter:card',
            cardType: 'summary_large_image'
          }}
          robotsProps={{
            nosnippet: true,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: 'none',
            maxVideoPreview: -1
          }}
        />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
