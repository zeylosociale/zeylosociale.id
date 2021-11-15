import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const About = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src="/img/zeylosociale-bg.png"
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <BlogTags
            tags={[
              'Zeylosociale',
              'Sosial Media',
              'Instagram',
              'TikTok',
              'Shopee'
            ]}
          />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Zeylosociale.id - Jasa Optimasi Media Sosial
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            align="justify"
          >
            <Text as={'b'}>Zeylosociale.id</Text> menyediakan jasa dan layanan
            optimasi bisnis melalui social media, anda dapat menggunakan jasa
            kami untuk menambah traffic social media anda seperti Instagram,
            Tiktok, Shopee dan lain sebagainya. Dengan harga yang terjangkau
            kualitas kami tidak kalah dengan penyedia jasa optimasi media sosial
            lainnya dengan jasa kami.
          </Text>
          <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            align="justify"
          >
            keuntungan menggunakan jasa optimasi media sosial ini untuk bisnis
            anda antara lain dapat meningkatkan popularitas serta kepercayaan
            konsumen anda sehingga profit penjualan anda dapat meningkat lebih
            signifikan. selain itu jasa optimasi media social ini juga dapat
            meningkatkan jangkauan anda dalam mencari konsumen karena dapat
            secara tidak langsung saat ini masing masing media social memiliki
            sistem tersendiri untuk mendukung anda meningkatkan traffic apabila
            feedback audience anda tinggi.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
