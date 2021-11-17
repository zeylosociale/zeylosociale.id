import { Image } from '@chakra-ui/image';
import {
  Box,
  Container,
  Heading,
  Stack,
  Wrap,
  WrapItem
} from '@chakra-ui/layout';
import Head from 'next/head';
import React from 'react';
import Title from '../components/Title';

const Testimony = ({ testimonies }) => {
  return (
    <>
      <Head>
        <title>Testimony - Zeylosociale.id</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={'container.xl'}>
        <Stack
          as={Box}
          textAlign={'left'}
          spacing={4}
          py={{ base: 10, md: 36 }}
        >
          <Title word="TESTIMONI ZEYLOSOCIALE.ID" />
          <Wrap px="1rem" spacing={4} justify="center">
            {testimonies.map((data, index) => (
              <WrapItem
                key={index}
                boxShadow="base"
                rounded="20px"
                overflow="hidden"
                bg="white"
                lineHeight="0"
                _hover={{ boxShadow: 'dark-lg' }}
              >
                <Image src={data} height={600} width={400} alt={data} />
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://zeylosociale.vercel.app/api/testimonies', {
    method: 'GET'
  });
  const testimonies = await res.json();
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      testimonies
    }
  };
}

export default Testimony;
