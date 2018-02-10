import createTestContext from 'react-cosmos-test/enzyme';
import until from 'async-until';
import fixtures from '../__fixtures__/VimeoFetcher.fixture';
import mock from '../../__mocks__/video';

const [mockedFixture] = fixtures;

const { mount, get } = createTestContext({
  fixture: mockedFixture,
});

beforeEach(mount);

test('fetch Vimeo and pass it to the render prop', async () => {
  // see https://medium.com/@skidding/when-can-i-assert-2f29171665c5
  await until(() => !get('state').loading);

  expect(get('state').video).toEqual(mock);
  expect(get('props').render).toHaveBeenCalledWith(get('state').video);
});
