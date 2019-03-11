import React from 'react';
import { mount, render, shallow } from 'enzyme'

import Button from '../components/button';

describe('The Button Component', () => {
  it('should match snapshot', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={mockClick}>
        Click Me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('should trigger the onClick prop', () => {
    const mockClick = jest.fn();
    const wrapper = mount(
      <Button onClick={mockClick}>
        Click Me
      </Button>
    );
    wrapper.find('button').simulate('click')
    expect(mockClick).toHaveBeenCalled();
  })

  it('should change color on hover', () => {
    const mockClick = jest.fn();
    const wrapper = render(
      <Button onClick={mockClick}>
        Click Me
      </Button>
    );
    console.log('background', wrapper.get(0))
  })
});

