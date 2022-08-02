import { Box, Center, Divider, Icon, Image, ListItem, Text, UnorderedList, Wrap, WrapItem } from '@chakra-ui/react' 
import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import isDark from '../components/Navbar'


import App from 'next/app';

export default function IndexPage(){
  return (
    <Box height="auto">

      <Navbar />

      <Flex>
          
          <Image src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465039/cristo-redentor-1920x400_p5msah.jpg'></Image>
          
          <Flex alignItems="center" marginBlockStart="72" marginInlineStart="64"  position="absolute" direction="column">
            <Image border="8px" rounded="full" width="2xs" src='https://bit.ly/dan-abramov'></Image>
            <Text fontSize="3xl" fontWeight="bold" mt="2">Nome do Aluno</Text>
          </Flex>
      </Flex>


      <Flex justifyContent="center">
        <Wrap wrap="wrap" marginBlockStart={64}>

          <WrapItem>
            <Link href="/projeto">
                <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg" />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>

                        <Icon viewBox='0 0 200 200' color='green.500'>
                          <path fill='currentColor' d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'/>
                        </Icon>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >

                            <Text>AAAAAAA</Text>

                        </Box>

                        <Box>

                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>

                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="/projeto">
                <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg" />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>

                        <Icon viewBox='0 0 200 200' color='green.500'>
                          <path fill='currentColor' d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'/>
                        </Icon>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >

                            <Text>AAAAAAA</Text>

                        </Box>

                        <Box>

                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>

                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="/projeto">
                <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg" />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>

                        <Icon viewBox='0 0 200 200' color='green.500'>
                          <path fill='currentColor' d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'/>
                        </Icon>

                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >

                            <Text>AAAAAAA</Text>

                        </Box>

                        <Box>

                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>

                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Link> 
          </WrapItem>

        </Wrap>
      </Flex>


      <Flex mt={24} alignItems="center" _dark={{backgroundColor:"blackAlpha.400"}} backgroundColor="gray.200" p={20} justifyContent="space-evenly">

        <Box>
          <Heading>Habilidades</Heading>
          <UnorderedList spacing={1} mt={8}>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
          </UnorderedList>
        </Box>


        <Center height='300px'>
          <Divider _dark={{borderColor:"gray.100"}} borderColor="blackAlpha.900" orientation='vertical' />
        </Center>

        <Box alignItems="center" justifyItems="center">
        <Heading>Formações</Heading>


          <UnorderedList spacing={1} mt={8}>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
            <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
          </UnorderedList>

        </Box>

      </Flex>

      <Flex backgroundColor="gray.100" alignItems="center" justifyContent="center" direction="column"  _dark={{backgroundColor:"blackAlpha.300"}} height={"250"}>
        <Text as="cite">Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem.</Text>
        <Divider mt={2} mb={2} width="100px" _dark={{borderColor:"gray.100"}} borderColor="blackAlpha.900" ></Divider>
        <Text as="i" >Peter Drucker</Text>
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

