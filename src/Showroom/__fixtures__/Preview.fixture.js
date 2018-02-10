import Preview from '../Preview';
import video from '../../__mocks__/video';

const { uri, pictures } = video;

export default {
  component: Preview,
  props: {
    uri,
    pictures,
  },
};
