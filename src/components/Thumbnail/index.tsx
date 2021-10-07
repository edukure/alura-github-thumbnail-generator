import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

import { colors } from '@theme';
import { BASE_URL } from '@config';

export type Thumbnail = {
  title: string;
  description: string;
  type: keyof typeof colors.escola;
};

function Thumbnail({ title, description, type }: Thumbnail) {
  return (
    <Box h="640px" w="1280px" position="relative">
      <Image
        src={`${BASE_URL}/templates/${type}.png`}
        alt={`Thumbnail do curso ${title}`}
      />
      <Box position="absolute" bottom="96px" left="48px" maxW="1184px">
        <Heading fontSize="56px" color={`escola.${type}`} mb={8}>
          {title}
        </Heading>
        <Text fontSize="40px" color="white">
          {description}
        </Text>
      </Box>
    </Box>
  );
}

export default Thumbnail;
