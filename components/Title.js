import { Heading } from '@chakra-ui/layout';
import React from 'react';

const Title = ({word}) => {
  return (
    <Heading
      fontWeight={800}
      fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
      lineHeight={'110%'}
      as={'u'}
      color={'#D8AF55'}
      marginBottom={10}
    >
      {word}
    </Heading>
  );
};

export default Title;
