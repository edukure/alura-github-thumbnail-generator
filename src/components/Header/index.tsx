import React from 'react';
import { Image, Flex, Container, IconButton, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <Container maxW="container.xl" mb={8} pt={4}>
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Link href="https://www.alura.com.br/" isExternal>
          <Image
            src="/assets/alura-logo.svg"
            h={10}
            alt="Logo da Alura"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </Link>

        <Link
          href="https://github.com/edukure/alura-github-thumbnail-generator"
          isExternal
        >
          <IconButton
            aria-label="visitar repositório"
            icon={<FaGithub size="40px" />}
            variant="link"
            color="white"
            size="lg"
            _hover={{ color: 'gray.300', transform: 'scale(1.1)' }}
          />
        </Link>
      </Flex>
    </Container>
  );
}

export default Header;
