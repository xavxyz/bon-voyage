import Information from '../Information';
import video from '../../__mocks__/video';

const { name, description } = video;

export default {
  component: Information,
  props: {
    name,
    description,
  },
};
