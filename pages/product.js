import {
  Box,
  Button,
  Container,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  Link
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import Head from 'next/head';
import React from 'react';


const Product = () => {
  const image = {
    ig: '/img/instagram.jpg',
    tiktok: '/img/tiktok.jpg',
    shopee: '/img/shopee.jpg'
  };
  const items1 = [
    '200 = 30k',
    '500 = 50k',
    '1000 = 85k',
    '2000 = 150k',
    '3000 = 210k',
    '4000 = 270k',
    '5000 = 320k',
    '7000 = 400k',
    '10.000 = 600k'
  ];
  const items2 = [
    '500 like = 45k',
    '1000 like = 80k',
    '2000 like = 120k',
    '3000 like = 180k',
    '4000 like = 230k',
    '5000 like = 270k'
  ];
  const items3 = [
    '1k fols = 100k',
    '2k fols = 170k',
    '5k fols = 350k',
    '10k fols = 650k',
    '20k fols = 1jt',
    '50k fols = 3jt',
    '100k fols = 4jt'
  ];
  const items4 = [
    '200 = 30k',
    '500 = 50k',
    '1000 = 85k',
    '2000 = 150k ',
    '3000 = 210k',
    '4000 = 270k',
    '5000 = 320k',
    '7000 = 400k',
    '10.000 = 600k'
  ];
  const items5 = [
    '1k = 65k',
    '2k = 130k',
    '3k = 190k',
    '4k = 260k',
    '5k = 325k',
    '10k = 600k'
  ];
  return (
    <>
      <Head>
        <title>Product - Zeylosociale.id</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Container maxW={'container.xl'}>
        <Stack
          as={Box}
          textAlign={'left'}
          spacing={4}
          py={{ base: 10, md: 36 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            as={'u'}
            color={'#D8AF55'}
            marginBottom={10}
          >
            PRODUK DI ZEYLOSOCIALE.ID
          </Heading>
          <SimpleGrid columns={[1, 3, 5]} gap={4}>
            <ProductCard
              title="Follower Instagram Indo"
              imageUrl={image.ig}
              items={items1}
            />
            <ProductCard
              title="Like Instagram Indo"
              imageUrl={image.ig}
              items={items2}
            />
            <ProductCard
              title="Akun Instagram Indo"
              imageUrl={image.ig}
              items={items3}
            />
            <ProductCard
              title="Follower TikTok Indo"
              imageUrl={image.tiktok}
              items={items4}
            />
            <ProductCard
              title="Follower Shopee"
              imageUrl={image.shopee}
              items={items5}
            />
          </SimpleGrid>
          <Center p={5}>
            <Box pt={7}>
              <Link
                href={'https://wa.me/6282335179753'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  rounded={'full'}
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500'
                  }}
                >
                  Beli Sekarang
                </Button>
              </Link>
            </Box>
          </Center>
          <Center>
            <Tabs variant="soft-rounded" colorScheme="green" mt={'30'}>
              <TabList>
                <Tab>Informasi Followers Instagram Indonesia</Tab>
                <Tab>Informasi Followers TikTok Indonesia</Tab>
                <Tab>Informasi Followers Shopee</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ol>
                    <li>
                      Penjelasan dibawah ini untuk layanan Followers Instagram
                      Indonesia (Username Indonesia)
                    </li>
                    <li>
                      Kualitas akun followers instagram ini adalah (real akun)
                      bukan bot
                    </li>
                    <li>One Time In ( Followers akan masuk dalam 1 waktu)</li>
                    <li>Estimasi selesai : Normal 1-2 hari masuk</li>
                    <li>Tidak butuh Akses Login</li>
                    <li>Bisa digunakan untuk akun baru</li>
                  </ol>
                </TabPanel>
                <TabPanel>
                  <ol>
                    <li>Layanan Followers Tiktok</li>
                    <li>
                      Kualitas akun followers Tiktok ini adalah (real akun)
                      bukan bot
                    </li>
                    <li>
                      Rasio Drop dibawah 5% bisa dikategorikan permanent
                      followers
                    </li>
                    <li>Masuk bertahap, jadi selesai tergantung orderan</li>
                    <li>Estimasi selesai : Normal 1-2 hari masuk</li>
                    <li>Tidak butuh Akses Login</li>
                    <li>Bisa digunakan untuk akun baru</li>
                  </ol>
                </TabPanel>
                <TabPanel>
                  <ol>
                    <li>Layanan followers Shopee</li>
                    <li>Masuk bertahap, jadi selesai tergantung orderan</li>
                    <li>Estimasi selesai : Normal 1-3</li>
                    <li>Tidak butuh Akses Login</li>
                    <li>Bisa digunakan untuk akun baru</li>
                  </ol>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Stack>
      </Container>
    </>
  );
};

export default Product;
