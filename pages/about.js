import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import React from 'react';

const pageMeta = {
  title: `Zeylosociale - About`,
  description: `Zeylosociale adalah jasa dan layanan socialmedia yang siap untuk membangun dan mengembangkan akun social media milik anda/ perusahaan anda.`
};

export default function About() {
  return (
    <>
      <NextSeo {...pageMeta} />
      <Container maxW={'container.xl'}>
        <Stack
          as={Box}
          textAlign={'justify'}
          spacing={4}
          py={{ base: 10, md: 36 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            as={'u'}
            color={'#D8AF55'}
          >
            TENTANG ZEYLOSOCIALE.ID
          </Heading>
          <Text
            textStyle={'paragraph'}
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.500'}
          >
            <Text as={'b'}>Zeylosociale</Text> adalah jasa dan layanan social
            media yang siap untuk membangun dan mengembangkan akun social media
            milik anda/ perusahaan anda. Kami menyediakan jasa pada platfrom
            seperi Instagram, Tiktok, Twitter, dan Shopee. Seluruh Optimasi
            seperti meningkatkan Followers, Likes, maupun engagement lainnya
            bisa kami lakukan untuk anda. Cukup hubungi kami melalui whatsapp
            dan jelaskan tentang platfrom apa yang akan anda optimasi dan kami
            akan memberikan solusi dan saran yang terbaik untuk anda. Harga
            setiap layanan kami memang bukan yang termurah karena kualitas juga
            tidak murahan, kami selalu memberikan pelayanan yang terbaik dan
            maksimal untuk setiap orderan dari konsumen kami.
          </Text>
          <Heading
            textAlign={'right'}
            fontWeight={700}
            fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}
            lineHeight={'110%'}
          >
            PERKEMBANGAN SOSIAL MEDIA
          </Heading>
          <Text
            textStyle={'paragraph'}
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.500'}
          >
            zeylosociale adalah jasa dan layanan social media yang siap untuk
            membangun dan mengembangkan akun social media milik anda/ perusahaan
            anda. Kami menyediakan jasa pada platfrom seperi Instagram,
            Facebook, Youtube, Tiktok, Twitter, Shopee dan Tokopedia. Seluruh
            Optimasi seperti meningkatkan Followers, Likes, maupun engagement
            lainnya bisa kami lakukan untuk anda. Cukup hubungi kami melalui
            whatsapp dan jelaskan tentang platfrom apa yang akan anda optimasi
            dan kami akan memberikan solusi dan saran yang terbaik untuk anda.
          </Text>
          <Heading
            textAlign={'left'}
            fontWeight={700}
            fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}
            lineHeight={'110%'}
          >
            RAGU DENGAN JASA KAMI ?
          </Heading>
          <Text
            textStyle={'paragraph'}
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.500'}
          >
            Banyak oknum penyedia jasa sejenis dengan kami yang kualitas
            pelayanannya buruk maupun memang tidak bertanggung jawab mengenai
            jual beli followers atau jasa sejenisnya. Namun kami sangat
            memprioritaskan kepuasan konsumen karena REPEAT ORDER lebih
            menguntungkan dibandingkan memperbanyak jangkauan konsumen tetapi
            konsumen merasa tidak puas dan tidak akan pernah melakukan pembelian
            ulang kepada kami. Apabila anda masih ragu kami tidak memaksa anda
            untuk menggunakan layanan kami silahkan cari penyedia jasa lain.
            kami juga memiliki GALLERY TESTIMONI KAMI.
          </Text>
          <Heading
            textAlign={'right'}
            fontWeight={700}
            fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}
            lineHeight={'110%'}
          >
            SEDIKIT INFORMASI
          </Heading>
          <Text
            textStyle={'paragraph'}
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.500'}
          >
            Kami memang sempat menjual jasa kami di marketplace indonesia
            seperti shopee dan tokopedia, tetapi untuk saat ini dan kedepannya
            kami sudah tidak ada di marketplace, alasannya? marketplace seperti
            tokopedia dan shopee sudah memperketat larangan penjualan produk
            digital yang tidak memerlukan kurir untuk pengantaran ke alamat
            pembeli. sampai 2019 masih bisa di siasati dengan menggunakan
            pengiriman kotak kosong, tapi setelah itu semua kata kunci yang
            berkaitan dengan layanan dan jasa yang tidak menggunakan produk
            fisik langsung terblokir beserta tokonya, bisa di cek sendiri. jadi
            sudah tidak memungkinkan untuk menjual jasa kami di marketplace.
          </Text>
          <Text
            textStyle={'paragraph'}
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.500'}
          >
            Kami tidak pernah memblokir pelanggan, jadi jika whatsapp kami
            centang 1 itu artinya whatsapp kami sedang bermasalah karena nomor
            kami beberapa kali bermasalah/diblokir dari whatsapp bisnis. apabila
            sangat penting seperti konfirmasi pembayaran/komplain bisa DM
            instagram kami, biasanya kami update di snapgram jika whatsapp kami
            sedang bermasalah. Sekian terimakasih~
          </Text>
        </Stack>
      </Container>
    </>
  );
}
