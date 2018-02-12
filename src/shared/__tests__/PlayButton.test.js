import React from 'react';
import PlayButton, { Button } from '../PlayButton';
import { shallow } from 'enzyme';

test('the event handler is called only when the button is shown', () => {
  const onClick = jest.fn();
  const wrapper = shallow(<PlayButton hidden={false} onClick={onClick} />);

  wrapper.find(Button).simulate('click');

  expect(onClick).toHaveBeenCalled();

  wrapper.setProps({ hidden: true });
  onClick.mockReset();

  wrapper.find(Button).simulate('click');

  expect(onClick).not.toHaveBeenCalled();
});

test('the button is shown/hidden depending on its props', () => {
  const wrapper = shallow(<PlayButton hidden={false} onClick={() => {}} />);

  expect(wrapper.find(Button).prop('style')).toEqual({
    opacity: 1,
    cursor: 'pointer',
  });

  wrapper.setProps({ hidden: true });

  expect(wrapper.find(Button).prop('style')).toEqual({
    opacity: 0,
    cursor: 'default',
  });
});
