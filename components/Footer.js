import React from 'react';
import Logo from '../components/Logo';
import NextLink from 'next/link';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} Made by Zeylosociale. All rights
              reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Menu</ListHeader>
            <NextLink href={'/'} as={'/'}>
              <Link href={'#'}>Home</Link>
            </NextLink>
            <NextLink href={'/product'} as={'/'}>
              <Link href={'#'}>Product</Link>
            </NextLink>
            <NextLink href={'/order'} as={'/'}>
              <Link href={'#'}>Order</Link>
            </NextLink>
            <NextLink href={'/about'} as={'/'}>
              <Link href={'#'}>About</Link>
            </NextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link
              href={'https://www.instagram.com/zeylosociale.id/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              href={'https://wa.me/6282335179753'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
