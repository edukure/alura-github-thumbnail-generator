import React from 'react';
import { GetServerSideProps } from 'next';

import Thumbnail from '../components/Thumbnail';

function ThumbnailPage({ title, description, type }) {
  return <Thumbnail type={type} title={title} description={description} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title, description, type } = context.query;

  return {
    props: {
      title,
      description,
      type,
    },
  };
};

export default ThumbnailPage;
