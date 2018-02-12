import React from 'react';
import Title, { Heading } from '../Title';
import { mount } from 'enzyme';

test('renders one line per two words', () => {
  const length = 7;

  const words = Array.from({ length }, () => 'Zen');
  const wrapper = mount(<Title>{words.join(' ')}</Title>);

  expect(wrapper.find(Heading)).toHaveLength(Math.round(length / 2));
});

test('accepts only children as string', () => {
  // const wrapper = mount(<Title>{123}</Title>);

  expect(() => mount(<Title>{123}</Title>)).toThrow();
});
