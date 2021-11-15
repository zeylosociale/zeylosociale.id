import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Center
} from '@chakra-ui/react';
import { faAngleDoubleUp, faCreditCard, faKey, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

const BenefitBase = ({ children }) => {
  return <Box>{children}</Box>;
};

const BenefitContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      {children}
    </Stack>
  );
};

const BenefitHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const BenefitText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const BenefitIcon = ({ title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Stack spacing={-1} align={'center'}>
        <Text fontSize={'lg'} fontWeight={600}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Benefit() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Mengapa Harus Menggunakan Zeylosociale.id ? </Heading>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <BenefitBase>
            <BenefitContent>
              <BenefitHeading>
                Pembayaran Mudah
              </BenefitHeading>
              <BenefitText>
                Menyediakan sistem pembayaran yang mudah, aman, dan terpercaya. Pembayaran
                Dapat dilakukan pada berbagai macam platform
              </BenefitText>
            </BenefitContent>
            
            <BenefitIcon
              title={<FontAwesomeIcon icon={faCreditCard} size="4x"/>}
            />
          </BenefitBase>
          <BenefitBase>
            <BenefitContent>
              <BenefitHeading>Kualitas Terbaik</BenefitHeading>
              <BenefitText>
                Menyediakan pelayanan dengan kualitas terbaik, semua produk yaitu follower, 
                likes, dan akun terjamin 100% real account bukan robot
              </BenefitText>
            </BenefitContent>
            <BenefitIcon
              title={<FontAwesomeIcon icon={faAngleDoubleUp} size="4x"/>}
            />
          </BenefitBase>
          <BenefitBase>
            <BenefitContent>
              <BenefitHeading>Harga Bersahabat</BenefitHeading>
              <BenefitText>
                Harga paling murah dan bersahabat dari jasa penyedia optimasi sosial media yang lain.
                Harga Zeylosociale.id dimulai dari 30 ribu saja. 
              </BenefitText>
            </BenefitContent>
            <BenefitIcon
              title={<FontAwesomeIcon icon={faMoneyBillWaveAlt} size="4x"/>}
            />
          </BenefitBase>
          <BenefitBase>
            <BenefitContent>
              <BenefitHeading>Tanpa Akses Login</BenefitHeading>
              <BenefitText>
                Proses dilakukan tanpa akses login akun pembeli yang bersangkutan. 
                Sangat direkomendasikan untuk pembeli yang khawatir akan kehilangan akun 
              </BenefitText>
            </BenefitContent>
            <BenefitIcon
              title={<FontAwesomeIcon icon={faKey} size="4x"/>}
            />
          </BenefitBase>
        </Stack>
      </Container>
    </Box>
  );
}
