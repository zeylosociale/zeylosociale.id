import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useBreakpointValue
} from '@chakra-ui/react';

import Benefit from '../components/Benefit';
import NextLink from 'next/link';
import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Index() {
  return (
    <>
      <Head>
        <title>Zeylosociale.id - Jasa Optimasi Sosial Media Terbaik</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Box>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#D8AF55',
                    zIndex: -1
                  }}
                >
                  Kembangakan
                </Text>
                <br />{' '}
                <Text color={'#D8AF55'} as={'span'}>
                  Bisnis dan Sosmedmu Bersama Kami
                </Text>{' '}
              </Heading>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Link
                  href={'https://wa.me/6282335179753'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    leftIcon={<FontAwesomeIcon icon={faWhatsapp} size="lg"/>}
                    rounded={'full'}
                    bg={'green.400'}
                    color={'white'}
                    _hover={{
                      bg: 'green.500'
                    }}
                  >
                    Whatsapp
                  </Button>
                </Link>
                <NextLink href={'/order'}>
                  <Button rounded={'full'}>Cara Order</Button>
                </NextLink>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
            />
          </Flex>
        </Stack>
      </Box>
      <Box>
        <Benefit/>
      </Box>
    </>
  );
}
