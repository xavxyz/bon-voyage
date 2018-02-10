import React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../__fixtures__/index.fixture';
import Information from '../Information';
import Preview from '../Preview';

const { mount, getWrapper, get } = createTestContext({ fixture });

beforeEach(mount);

test("video's information is shared between two panes", () => {
  const { video: { name, description, uri, pictures } } = get('props');

  expect(getWrapper(Information)).toHaveProp('name', name);
  expect(getWrapper(Information)).toHaveProp('description', description);
  expect(getWrapper(Preview)).toHaveProp('uri', uri);
  expect(getWrapper(Preview)).toHaveProp('pictures', pictures);
});
