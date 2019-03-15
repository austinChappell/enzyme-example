// External Dependencies
import React from 'react';
import { mount, shallow } from 'enzyme';

// Internal Dependencies
import Button from '../components/Button';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Button onClick={() => {}}>
        Click Me
      </Button>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('is clickable', () => {
    const mockClick = jest.fn();
    const wrapper = mount(
      <Button onClick={mockClick}>
        Click Me
      </Button>,
    );
    wrapper.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  it('is not clickable when disabled', () => {
    const mockClick = jest.fn();
    const wrapper = mount(
      <Button
        disabled
        onClick={mockClick}
      >
        Click Me
      </Button>,
    );
    wrapper.find('button').simulate('click');
    expect(mockClick).not.toHaveBeenCalled();
  });
});
