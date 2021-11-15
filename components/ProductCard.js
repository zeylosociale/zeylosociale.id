import React from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Image,
  Text,
  Stack,
  VStack
} from '@chakra-ui/react';

const ProductCard = ({ title, items, imageUrl }) => {
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={imageUrl} alt="social-media" height={200} width={400} />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <Center>{title}</Center>
          </Box>
          <Box>
            <VStack mt={5}>
              {items.map((data, index) => (
                <>
                  <Divider orientation="horizontal" />
                  <Text key={index}>{data}</Text>
                </>
              ))}
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;
