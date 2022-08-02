import { Box, Image, Text, Wrap } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { Icon,Flex, Heading} from '@chakra-ui/react'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import isDark from '../components/Navbar'


import App from 'next/app';
import { Search2Icon } from '@chakra-ui/icons';

export default function IndexPage() {
    return (
        <Box height="auto">

            <Navbar />

            <Flex p={20} flexWrap="wrap" paddingTop="6" mt="28" alignItems="center" justifyContent="space-evenly"  mb="12">

                <Flex direction="column">

                    <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text' fontSize={{ lg: "6xl", md: "40px" }} fontWeight='extrabold' mb={10}>Portifólio</Heading>

                    <Text fontSize={{ lg: "md", md: "sm" }} mb="10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make</Text>

                </Flex>

                <Flex _dark={{ bg: "gray.700" }} bgColor="gray.200" rounded="full" p={10}>
                    <Image width={{ lg: 500, md: 300, sm: 200 }} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1654259680/app_development_SVG_nzmmbi.svg'></Image>
                </Flex>

            </Flex>

            <Flex justifyContent="space-around">
            
            </Flex>

            <Wrap direction="row" justifyContent="center" p={10} mb="28">
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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                <Link href="/projeto">
                    <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg" />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>

                                <Icon viewBox='0 0 200 200' color='yellow.500'>
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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                <Link href="/projeto">
                    <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg" />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>

                                <Icon viewBox='0 0 200 200' color='yellow.500'>
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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

                <Link href="/projeto">
                    <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src="https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg" />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>

                                <Icon viewBox='0 0 200 200' color='yellow.500'>
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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>

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

                                <Text>Nome do Projeto</Text>

                            </Box>

                            <Box>

                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / Descrição do projeto
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>

                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link> 

            </Wrap>

            <Footer />
        </Box>
    )
}
