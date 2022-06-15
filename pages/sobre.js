import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Image, Link, Text } from '@chakra-ui/react'
import { Button, Flex, Heading } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import isDark from '../components/Navbar';

import App from 'next/app';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export default function sobrePage() {

    return (
        <Box height="auto">

            <Navbar />

            <Flex p={20} flexWrap="wrap" paddingTop="6" mt="20" alignItems="center" justifyContent="space-evenly" mb="12">

                <Flex direction="column">

                    <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
                        bgClip='text' fontSize={{ lg: "6xl", md: "40px" }} fontWeight='extrabold' mb={10}>Sobre</Heading>

                    <Text fontSize={{ lg: "md", md: "sm" }} mb="10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make</Text>

                </Flex>

                <Flex _dark={{ bg: "gray.700" }} bgColor="gray.200" rounded="full" p={10}>
                    <Image width={{ lg: 500, md: 300, sm: 200 }} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1654170256/Books_SVG_fx5mgm.svg'></Image>
                </Flex>

            </Flex>


            <Accordion allowMultiple justifyContent="center" alignItems="center">
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton  _hover={{bg:'teal.400'}} _expanded={{ bg: 'teal', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                        Quem somos
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <Flex justifyContent="center">
                                <AccordionPanel pb={4} maxWidth="1300px" p={20}>
                                    <Flex direction="row">
                                        <Image width={{ lg: 500, md: 300, sm: 200 }} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg' mr={10}></Image>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Flex>
                                </AccordionPanel>
                            </Flex>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{bg:'teal.400'}} _expanded={{ bg: 'teal', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                        O que fazemos
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <Flex justifyContent="center">
                                <AccordionPanel pb={4} maxWidth="1300px" p={20}>
                                    <Flex direction="row" justifyContent="center" alignItems="center">
                                        <Image width={{ lg: 500, md: 300, sm: 200 }} mr={10} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1654257555/prTFIj_y4afpi.jpg'></Image>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Flex>
                                </AccordionPanel>
                            </Flex>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _hover={{bg:'teal.400'}} _expanded={{ bg: 'teal', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                        Senai Roberto Mange
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <Flex justifyContent="center">
                                <AccordionPanel pb={4} maxWidth="1300px" p={20}>
                                    <Flex direction="row" justifyContent="center" alignItems="center">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Flex>
                                    <Link href="https://campinas.sp.senai.br/">
                                            <Button mt={8} maxWidth="40" colorScheme='teal' variant='solid'> Entrar no site </Button>
                                        </Link>
                                </AccordionPanel>
                            </Flex>
                        </>
                    )}
                </AccordionItem>
            </Accordion>

            <Footer />
        </Box>
    )
}

