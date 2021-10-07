import React from 'react';
import {
  FormControl,
  Button,
  FormLabel,
  Input,
  Stack,
  Select,
  Box,
} from '@chakra-ui/react';

function Form({ onSubmit, onInputChange }) {
  return (
    <Box bg="white" p={8} mb={12} rounded="lg" maxW="container.lg" w="100%">
      <form onSubmit={onSubmit} autoComplete="off">
        <Stack
          justifyContent="space-around"
          direction={{ base: 'column', sm: 'row' }}
          spacing={{ base: 4, sm: 8 }}
        >
          <Stack spacing={4} w={{ base: '100%', sm: '50%' }}>
            <FormControl>
              <FormLabel htmlFor="title">Título</FormLabel>
              <Input
                type="text"
                name="title"
                placeholder="Insira o título do curso aqui"
                onChange={onInputChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="description">Descrição</FormLabel>
              <Input
                type="text"
                name="description"
                placeholder="Insira a descrição (opcional)"
                onChange={onInputChange}
              />
            </FormControl>
          </Stack>

          <Stack spacing={{ base: 4, sm: 12 }} w={{ base: '100%', sm: '50%' }}>
            <FormControl>
              <FormLabel>Escola</FormLabel>
              <Select onChange={onInputChange} name="type">
                <option value="front-end">Front-End</option>
                <option value="programacao">Programação</option>
                <option value="ux-design">UX Design</option>
                <option value="dev-ops">DevOps</option>
                <option value="inovacao-gestao">Inovação e Gestão</option>
                <option value="mobile">Mobile</option>
              </Select>
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Download
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}

export default Form;
