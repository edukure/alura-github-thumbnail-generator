import React, { useState } from 'react';
import { Stack, Container, Flex, Image, Box } from '@chakra-ui/react';

import Header from '@components/Header';
import Form from '@components/Form';
import useDebounce from '@hooks/useDebounce';
import { Thumbnail } from '@components/Thumbnail';
import buildUrl from '@utils/buildUrl';

const initialThumbnailInfo: Thumbnail = {
  title: 'Gerador de Imagens de Capa para o Github',
  description: 'criado pelo Scuba Team',
  type: 'front-end',
};

export default function Home() {
  const [url, setUrl] = useState<string>(null);
  const [thumbnailInfo, setThumbnailInfo] =
    useState<Thumbnail>(initialThumbnailInfo);
  const [isLoading, setIsLoading] = useState(false);

  const downloadThumbnail = async () => {
    /* náo entendi direito como funciona, mas peguei daqui
      https://github.com/zhumeisongsong/react-url-image-downloader/blob/main/src/index.tsx
    */
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', `thumbnail-${thumbnailInfo.title}`);
    document.body.appendChild(link);
    link.click();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    downloadThumbnail();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.getAttribute('name');

    setThumbnailInfo({
      ...thumbnailInfo,
      [fieldName]: event.target.value,
    });
  };

  useDebounce(
    () => {
      setIsLoading(true);
      const newUrl = buildUrl({ ...thumbnailInfo });
      setUrl(newUrl);
    },
    500,
    [thumbnailInfo]
  );

  return (
    <Flex
      direction="column"
      alignItems="center"
      bgGradient="linear(to-b, alura.dark-blue, alura.blue)"
      minH="100vh"
    >
      <Header />
      <Container centerContent maxW="container.lg">
        <Stack
          spacing={8}
          display="flex"
          direction="column"
          alignItems="center"
        >
          <Box
            w="100%"
            h="100%"
            bg="white"
            filter={isLoading ? 'blur(2px)' : ''}
          >
            <Image
              src={url || '/thumbnail-template.png'}
              bg="black"
              onLoad={() => setIsLoading(false)}
              alt="thumbnail template"
            />
          </Box>

          <Form onSubmit={handleSubmit} onInputChange={handleChange} />
        </Stack>
      </Container>
    </Flex>
  );
}
