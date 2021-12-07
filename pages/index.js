import Benefit from '../components/Benefit';
import About from '../components/About';
import Hero from '../components/Hero';
import Head from 'next/head';
import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { NextSeo } from 'next-seo';

export default function Index() {
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

  const pageMeta = {
    title: `Zeylosociale - Pusat Jual Follower Aktif Garansi 100%`,
    description: `Dapatkan pelanggan baru dengan mudah. Tidak perlu menghabiskan banyak waktu dan tenaga dalam memulai bisnis. Harga aman di kantong. Garansi 100% dan uang kembali.`,
    canonical: 'https://www.zeylosociale.com/'
  };

  return (
    <>
      <NextSeo {...pageMeta} />
      <Hero />
      <Benefit />
      <About />
      <Box bg={useColorModeValue('gray.100', 'gray.700')}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
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
              title="Akun Instagram Siap Pakai Indo"
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
        </Container>
      </Box>
    </>
  );
}
