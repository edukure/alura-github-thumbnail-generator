import { Thumbnail } from '../components/Thumbnail';

const buildUrl = ({ title, description, type }: Thumbnail) => {
  return `/api/thumbnail?title=${title}&type=${type}&description=${description}`;
};

export default buildUrl;
