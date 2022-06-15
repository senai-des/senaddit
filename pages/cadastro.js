import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Checkbox, Flex, Heading, IconButton, Input, MenuButton, TagCloseButton, useToast } from '@chakra-ui/react'
import Link from 'next/link';

export default function CadastroPage(){

  const toast = useToast()

  return(
    <Flex  height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" _dark={{bg:"blackAlpha.300"}} background="gray.100" p={10} rounded={6} height="550px">
        <Heading textAlign="center" mb={6}>Cadastro</Heading>
        <Input placeholder="Nome Completo" variant="filled" mb={3} type="text"/>
        <Input placeholder="CPF" variant="filled" mb={3} type="number"/>
        <Input placeholder="SeuEmail@gmail.com" variant="filled" mb={3} type="email"/>
        <Input placeholder="Senha" variant="filled" mb={4} type="password"/>
        <Input placeholder="Confirmação de Senha" variant="filled" mb={6} type="password"/>
        
        <Link href="/login">
          <Button onClick={() =>
          toast({title: 'Cadastro bem sucedido!',description: "Cadastro realizado com sucesso!",position:'top-right',status: 'success',duration: 4000,isClosable: true,})} colorScheme="teal" mb={6}>Cadastrar</Button>
        </Link>
        <Flex alignItems="center" fontSize="sm" justifyContent="center" direction="column">Já possuo cadastro<br/><Flex color="blue.600"><a href='/login'>Fazer Login</a></Flex></Flex>
        
      </Flex>
    </Flex>
  )
}

