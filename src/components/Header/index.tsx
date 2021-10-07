import React from 'react';
import { Image, Flex, Container, Box } from '@chakra-ui/react';

function Header() {
  return (
    <Container maxW="container.xl" mb={8} pt={4}>
      <Flex direction="row" justifyContent="space-between">
        <Image src="/assets/alura-logo.svg" h="48px" alt="Logo da Alura" />
        <Box bg="black" h="64px" w="64px" />
      </Flex>
    </Container>
  );
}

export default Header;
