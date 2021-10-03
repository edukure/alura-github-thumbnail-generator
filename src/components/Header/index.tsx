import React from 'react';
import { Image, Flex, Container, Box } from '@chakra-ui/react';

function Header() {
  return (
    <Container maxW="container.xl" mb={8} pt={4}>
      <Flex direction="row" justifyContent="space-between">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src="/alura-logo.svg" h="48px" />
        <Box bg="black" h="64px" w="64px" />
      </Flex>
    </Container>
  );
}

export default Header;
