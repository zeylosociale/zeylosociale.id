import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Stack,
  Link
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

const pageMeta = {
  title: `Zeylosociale - Order`,
  description: `Zeylosociale menyediakan cara order yang mudah dan terpercaya`
};

export default function Order() {
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
            CARA ORDER DI ZEYLOSOCIALE.ID
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    HUBUNGI WHATSAPP KAMI
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Hubungi kami via{' '}
                <Box as={'span'}>
                  <Link
                    href={'https://wa.me/6285850648664'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whatsapp
                  </Link>
                </Box>{' '}
                untuk konfirmasi terkait layanan yang anda minati. Kami akan
                mengirimkan pricelist lengkap untuk memudahkan anda dalam
                memilih layanan kami.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    ISI FORMAT ORDER
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Selanjutnya kami akan mengirimkan format order untuk diisi, dan
                setelah pengisian kami akan mengkalkulasi biaya pesanan anda.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    PEMBAYARAN PESANAN
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Kami akan memberikan jumlah biaya pesanan layanan yang harus di
                bayarkan dan nomor rekening kami untuk pelunasan pesanan anda.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    PESANAN DIPROSES
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Setelah melakukan pembayaran harap konfirmasi / kirim bukti
                transfer ke kami. kami akan segera memproses pesanan dan
                mengkonfirmasi setelah kami proses (waktu penyelesaian pesanan
                setelah kami proses tergantung jenis layanan yang anda pilih,
                lihat di deskripsi masing masing layanan)
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    PESANAN SELESAI
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                setelah pesanan anda selesai kami terkadang akan mengkonfirmasi
                apabila pesanan anda sudah selesai. tetapi biasanya kami tidak
                konfirmasi dan bisa anda cek di waktu yang kami janjikan untuk
                tiap layanan (contohnya like instagram worldwide untuk orderan
                dibawah 500 like akan selesai dalam 3-5 jam) (jika anda ingin
                mendapatkan konfirmasi setelah pesanan anda selesai anda bisa
                meminta kami untuk mengkonfirmasi pada saat pesanan anda sudah
                selesai pada saat anda mengkonfirmasi pembayaran / mengirimkan
                bukti transfer)
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'lightblue', color: 'black' }}
                >
                  <Box flex="1" textAlign="left">
                    KOMPLAIN PESANAN
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                apabila layanan belum masuk setelah estimasi waktu yang kami
                berikan anda bisa menghubungi kami kembali untuk komplain
                apabila belum masuk (bisa jadi pending/error) kami menerima
                refund dana 100% apabila pesanan anda tidak masuk sama sekali
                setelah estimasi waktu pesanan berakhir.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Container>
    </>
  );
}
