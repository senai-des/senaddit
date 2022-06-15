import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Checkbox, Flex, Heading, IconButton, Input, MenuButton, TagCloseButton, useToast } from '@chakra-ui/react'
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function LoginPage(){


    const toast = useToast()

  return(

    
    <Flex  height="100vh" alignItems="center" justifyContent="center">
      <Flex _dark={{bg:"blackAlpha.300"}} color="al" direction="column" background="gray.100" p={10} rounded={6} height="475px">
        <Heading  textAlign="center" mb={6}>Log in</Heading>
        <Input placeholder="SeuEmail@gmail.com" variant="filled" mb={3} type="email"/>
        <Input placeholder="***********" variant="filled" mb={4} type="password"/>
        <Checkbox defaultChecked mb={6} colorScheme="blue"><Flex fontSize="sm">Mantenha-me Conectado</Flex></Checkbox>
        <Link href='/'>
        <Button onClick={() =>
        toast({title: 'Login bem sucedido!',description: "Login realizado com sucesso!",position:'top-right',status: 'success',duration: 4000,isClosable: true,})} colorScheme="teal" mb={4}>Log in</Button>
        </Link>
        <Link href='/cadastro'>
        <Button  colorScheme="blue" mb={6}>Cadastro</Button>
        </Link>
        <Flex alignItems="center" fontSize="sm" justifyContent="center" direction="column">Não tenho cadastro<br/><Flex color="blue.600"><a href='/cadastro'>Cadastrar</a></Flex></Flex>

      </Flex>
    </Flex>
  )
}

