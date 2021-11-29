import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Link,
  OrderedList,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import Head from 'next/head';
import React from 'react';
import { NextSeo } from 'next-seo';

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

  const pageMeta = {
    title: `Zeylosociale.id - Product`,
    description: `Zeylosociale menyediakan berbagai macam platfrom sosial media untuk dioptimasi`
  };

  return (
    <>
      <NextSeo {...pageMeta} />
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
          <Center p={5}>
            <Box pt={7}>
              <Link
                href={'https://wa.me/6285850648664'}
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
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    INFORMASI FOLLOWERS INSTAGRAM
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    Penjelasan dibawah ini untuk layanan Followers Instagram
                    Indonesia (Username Indonesia)
                  </ListItem>
                  <ListItem>
                    Kualitas akun followers instagram ini adalah (real akun)
                    bukan bot
                  </ListItem>
                  <ListItem>
                    One Time In ( Followers akan masuk dalam 1 waktu)
                  </ListItem>
                  <ListItem>Estimasi selesai : Normal 3-7 hari masuk</ListItem>
                  <ListItem>Tidak butuh Akses Login</ListItem>
                  <ListItem>Bisa digunakan untuk akun baru</ListItem>
                  <ListItem>
                    Dan ada melayani req akun siap pakai 20k-200k harga range 1,
                    1-8 juta tergantung spesifikasi akun. SEMUA NEGO
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    INFORMASI FOLLOWERS TIKTOK
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>Layanan Followers Tiktok</ListItem>
                  <ListItem>
                    Kualitas Item akun followers Tiktok ini adalah (real akun)
                    bukan bot
                  </ListItem>
                  <ListItem>
                    Rasio Drop dibawah 5% bisa dikategorikan permanent followers
                  </ListItem>
                  <ListItem>
                    Masuk bertahap, jadi selesai tergantung orderan
                  </ListItem>
                  <ListItem>Estimasi selesai : Normal 1-2 hari</ListItem>
                  <ListItem>Tidak butuh Akses Login</ListItem>
                  <ListItem>Bisa digunakan untuk akun baru</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    INFORMASI FOLLOWERS SHOPEE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>Layanan followers Shopee</ListItem>
                  <ListItem>
                    Masuk bertahap, jadi selesai tergantung orderan
                  </ListItem>
                  <ListItem>Estimasi selesai : Normal 1 x 24 Jam</ListItem>
                  <ListItem>Tidak butuh Akses Login</ListItem>
                  <ListItem>Bisa digunakan untuk akun baru</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    CARA ORDER DAN KETENTUAN LAIN
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    Tentukan jenis dan jumlah layanan yang anda pilih
                  </ListItem>
                  <ListItem>Hubungi Admin melalui chat whatsapp</ListItem>
                  <ListItem>
                    Isi Format order yang diberikan oleh admin
                  </ListItem>
                  <ListItem>
                    Admin menghitung total biaya pemesanan & menginfokan kepada
                    anda
                  </ListItem>
                  <ListItem>
                    Anda melakukan pelunasan tagihan dan konfirmasi dengan
                    mengirimkan bukti pembayaran/transfer
                  </ListItem>
                  <ListItem>
                    Setelah menerima konfirmasi pembayaran kami akan segera
                    memproses pesanan anda
                  </ListItem>
                  <ListItem>
                    Pesanan anda akan masuk 1-2 hari setelah admin konfirmasi ke
                    listing antrian
                  </ListItem>
                  <ListItem>
                    Jika dalam 2 hari pesanan belum masuk bisa segera konfirmasi
                    ke admin untuk di urus
                  </ListItem>
                  <ListItem>
                    Bisa Refund full payment jika pesanan sama sekali tidak
                    masuk dalam 3 hari
                  </ListItem>
                </OrderedList>
                <Text as={'p'} mt={'5'}>
                  Metode Pembayaran yang tersedia:
                </Text>
                <UnorderedList>
                  <ListItem>BANK BCA: 5075183540</ListItem>
                  <ListItem>BANK BNI: 0892257483</ListItem>
                  <ListItem>DANA: 082335179753</ListItem>
                  <ListItem>OVO: 082335179753</ListItem>
                  <ListItem>SEMUA ATAS NAMA FARIZAL</ListItem>
                </UnorderedList>
                <UnorderedList mt={'5'}>
                  <ListItem>
                    Selama proses akun mohon jangan di private (harus publik)
                  </ListItem>
                  <ListItem>
                    Selama proses mohon jangan ganti username selama proses
                  </ListItem>
                  <ListItem>
                    Selama proses mohon jangan di dobel/bersamaan dengan jasa
                    lain agar tidak terjadi error
                  </ListItem>
                  <ListItem>
                    Kalau buru-buru/deadline mepet tidak disarankan untuk order
                  </ListItem>
                  <ListItem>
                    Jika dalam 3x24 Jam Followers belum masuk dapat mengajukan
                    Refund
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Container>
    </>
  );
};

export default Product;
