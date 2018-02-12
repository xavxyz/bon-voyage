import React from 'react';
import VideoTrigger, { PlayButton } from '../VideoTrigger';
import { shallow } from 'enzyme';

test('the event handler is called only when the video is not shown', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<VideoTrigger showVideo={false} onClick={onClick} />);

  wrapper.find(PlayButton).simulate('click');

  expect(onClick).toHaveBeenCalled();

  wrapper.setProps({ showVideo: true });
  onClick.mockReset();

  wrapper.find(PlayButton).simulate('click');

  expect(onClick).not.toHaveBeenCalled();
});

test('the button is shown/hidden when the video is hidden/shown', () => {
  const wrapper = shallow(
    <VideoTrigger showVideo={false} onClick={() => {}} />
  );

  expect(wrapper.find(PlayButton).prop('style')).toEqual({
    opacity: 1,
    cursor: 'pointer',
  });

  wrapper.setProps({ showVideo: true });

  expect(wrapper.find(PlayButton).prop('style')).toEqual({
    opacity: 0,
    cursor: 'default',
  });
});
