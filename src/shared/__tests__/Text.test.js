import createTestContext from 'react-cosmos-test/enzyme';
import fixtures from '../__fixtures__/Text.fixture';
import { Line } from '../Text';

const [fixture] = fixtures;

const { mount, get, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('parses line breaks', () => {
  const { content } = get('props');

  const expectedLines = content.split('\n').length;

  expect(getWrapper(Line)).toHaveLength(expectedLines);
});
