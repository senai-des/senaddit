import { Box, Image, Text } from '@chakra-ui/react' 
import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import isDark from '../components/Navbar';


import App from 'next/app';

export default function IndexPage(){
  return (
    <Box height="auto">

      <Navbar />

      <Flex p={20} flexWrap="wrap" paddingTop="6" mt="20" alignItems="center" justifyContent="space-evenly" mb="12">

        <Flex direction="column">

          <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text' fontSize={{lg:"6xl",md:"40px"}} fontWeight='extrabold' mb={10}>Desenvolvimento de <br></br> Sistemas</Heading>

          <Text fontSize={{lg:"md",md:"sm"}} mb="10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make</Text>

        </Flex>

        <Flex _dark={{bg:"gray.700"}} bgColor="gray.200" rounded="full" p={10}>
          <Image width={{lg:500,md:300,sm:200}} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653995156/Coding_SVG_n6v0it.svg'></Image>
        </Flex>

      </Flex>

      <Flex direction="row" justifyContent="center" p={10} mb="28">
        <Link href="/portifolio">
        <Box width={{lg:"400px",md:"300px"}} _dark={{bg:"gray.700"}} _hover={isDark?{bg:"gray.100"}:{bg:"blackAlpha.900"}} p={10} rounded="md">
          <Text color="#7928CA" fontSize={{lg:"3xl",md:"sm"}} mb="4">Projetos</Text>
          <Image src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653997990/Startup_SVG_pxngm7.svg'></Image>
        </Box></Link>

        <Link href="/alunos">
        <Box width={{lg:"400px",md:"300px"}} _dark={{bg:"gray.700"}} _hover={isDark?{bg:"gray.100"}:{bg:"blackAlpha.900"}} p={10} rounded="md" ml={10}>
          <Text color="#7928CA" fontSize={{lg:"3xl",md:"sm"}} mb="4">Alunos</Text>
          <Image src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653998441/Online_education_SVG_gmhwpv.svg'></Image>
        </Box></Link>

        <Link href="/sobre">
        <Box width={{lg:"400px",md:"300px"}} _dark={{bg:"gray.700"}} _hover={isDark?{bg:"gray.100"}:{bg:"blackAlpha.900"}} p={10} rounded="md" ml={10} >
          <Text color="#7928CA"fontSize={{lg:"3xl",md:"sm"}} mb="4">Sobre</Text>
          <Image src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653998370/Analytics_SVG_oixelj.svg'></Image>
        </Box></Link>

        
      </Flex>

      <Footer />
    </Box>
  )
}


 // <Box w='100%'>
      //   <Navbar />

      //   <ColorModeScript initialColorMode='light'></ColorModeScript>
      //   <Image htmlWidth="100%" src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653854417/WhatsApp_Image_2022-05-29_at_15.57.26_fy7ipb.jpg' alt='Dan Abramov' />
      //   <Footer />
      // </Box>

