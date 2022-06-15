import { Box, Code, color, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import isDark from '../components/Navbar'


import App from 'next/app';

export default function IndexPage() {

    const basicBoxStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      boxSize: '100%',
      height:'400px',
      color: 'white',
      textShadow: '0 0 20px black',
      fontWeight: 'bold',
      fontSize: '20px',
      px: 4,
      background:
        'url(https://res.cloudinary.com/dnhr0nevx/image/upload/v1654465039/cristo-redentor-1920x400_p5msah.jpg) center/cover no-repeat',
    }

  return (
    <Box height="auto">

      <Navbar />

      <Flex justifyContent="center" alignItems="center">
        

        <Box sx={basicBoxStyles} filter='auto' blur='2px' _dark={{brightness:'70%', blur:'1px'}} brightness="100%"></Box>
        <Heading position="absolute" fontSize={40} >Nome do Projeto</Heading>
      </Flex>


      <Flex>



        <Flex mt={20} alignItems="center" width="100%" direction="column">
          <Heading>Descrição</Heading>
          <Flex direction="row" mt={10}>
            <Box width="600px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </Box>

            <Box width="600px" ml={20} backgroundColor='gray.200' _dark={{ bg: "blackAlpha.500" }} p={12}>
              <Box>
                <Text fontSize={18}>Intergrantes</Text>
              </Box>
              <Box pt={2}>
                <Text fontSize={18}>Orientadores</Text>
              </Box>
              <Box pt={2}>
                <Text fontSize={18}>Segmento</Text>

              </Box>
              <Box pt={6}>
                <Text fontSize={14}>29/04/2004</Text>
              </Box>
            </Box>
          </Flex>

          <Box mt={20} maxWidth="800px" justifyContent="center">



            <Tabs variant='enclosed' bgColor="gray.300" _dark={{bg:'blackAlpha.500'}} rounded="2xl">
              <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>JavaScript</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Code p={10} rounded={20} children="<Flex alignItems='center' marginBlockStart='72' marginInlineStart='64' position='absolute' direction='column'>
    <Image border='8px' rounded='full' width='2xs' src=https://bit.ly/dan-abramov></Image>
    <Text fontSize='3xl' fontWeight='bold' mt='2'>Nome do Aluno</Text>
  </Flex>
  <Flex p={20} flexWrap='wrap' paddingTop='6' mt='20' alignItems='center' justifyContent='space-evenly' mb='12'>

        <Flex direction='column'>

          <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text' fontSize={{lg:'6xl',md:'40px'}} fontWeight='extrabold' mb={10}>Desenvolvimento de <br></br> Sistemas</Heading>

          <Text fontSize={{lg:'md',md:'sm'}} mb='10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make</Text>

        </Flex>">
                  </Code>
                </TabPanel>
                <TabPanel>
                  <Code p={10} rounded={20} children=".container {
  padding: 0 2rem;
}

.main {
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
">
                  </Code>
                </TabPanel>
                <TabPanel>
                  <Code p={10} rounded={20} children="function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
">
                  </Code>
                </TabPanel>
              </TabPanels>
            </Tabs>

          </Box>
        </Flex>



      </Flex>

      <Footer />
    </Box>
  )
}