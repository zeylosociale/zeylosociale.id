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
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NextSeo
          title="Pusat Jual Followers Aktif Dan Layanan Sosial Media Bergaransi 100%"
          description="Dapatkan pelanggan baru dengan meluaskan jangkauan bisnis dengan layanan kami untuk mempermudah bisnis anda. Tidak perlu untuk menghabiskan banyak waktu dan tenaga hanya dalam memulai bisnis. Harga aman di kantong. Garansi 100% dan uang kembali."
          canonical="https://zeylosociale.com"
          titleTemplate=" %s | Zeylosociale.id"
          openGraph={{
            type: 'article',
            locale: 'id_ID',
            title: 'Jual Followers Instagram Aktif Indonesia - Zeylosociale.id',
            description:
              'Dapatkan pelanggan baru dengan meluaskan jangkauan bisnis dengan layanan kami untuk mempermudah bisnis anda. Tidak perlu untuk menghabiskan banyak waktu dan tenaga hanya dalam memulai bisnis. Harga aman di kantong. Garansi 100% dan uang kembali.',
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
