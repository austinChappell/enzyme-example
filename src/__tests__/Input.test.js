import React from 'react';
import { mount, shallow } from 'enzyme';

import Input from '../components/Input';

describe('<Input />', () => {
  it('should match snapshot', () => {
    const mockChange = jest.fn();
    const wrapper = shallow(
      <Input
        ariaLabel="email"
        name="email"
        onChange={mockChange}
        value="Email"
      />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('should fire onChange when typing', () => {
    const mockChange = jest.fn();
    const wrapper = mount(
      <Input
        ariaLabel="email"
        name="email"
        onChange={mockChange}
        value="Email"
      />
    );
    wrapper.find('input').simulate('change');
    expect(mockChange).toHaveBeenCalled();
  })

  it('should fire onChange when triggered programmatically', () => {
    const mockChange = jest.fn();
    const wrapper = mount(
      <Input
        ariaLabel="email"
        name="email"
        onChange={mockChange}
        value="Email"
      />
    );
    wrapper.props().onChange();
    expect(mockChange).toHaveBeenCalled();
  })
})