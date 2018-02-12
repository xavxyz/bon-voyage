import React from 'react';
import { mount } from 'enzyme';
import Preview from '../Preview';
import mock from '../../__mocks__/video';

const eventListenerMap = {};
document.addEventListener = jest.fn((event, cb) => {
  eventListenerMap[event] = cb;
});

test('activate/deactivate the video container', () => {
  // create a fake environment around the Preview
  const div = document.createElement('div');
  document.body.appendChild(div);
  const wrapper = mount(<Preview uri={mock.uri} pictures={mock.pictures} />, {
    attachTo: div,
  });

  // when the button is clicked, show the video
  wrapper.find('button').simulate('click');
  expect(wrapper.state()).toHaveProperty('showVideo', true);

  // when clicked outside the video container, hide the video
  eventListenerMap.mousedown(div);
  expect(wrapper.state()).toHaveProperty('showVideo', false);
});
