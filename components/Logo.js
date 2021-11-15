import React from 'react';
import { Box, Image, Text, HStack } from '@chakra-ui/react';
const Logo = (props) => {
  return (
    <Box>
      <HStack>
        <Image src="/img/zeylo-logo.png" alt="logo" height={'8'} />
        <Text as={'b'}>Zeylosociale.id</Text>
      </HStack>
    </Box>
  );
};

export default Logo;
