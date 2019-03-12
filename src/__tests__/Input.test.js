// External Dependencies
import React from 'react';
import { mount, shallow } from 'enzyme';

// Internal Dependencies
import Input from '../components/Input';

describe('<Input />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Input
        ariaLabel="email"
        onChange={() => { }}
        value="myemail@gmail.com"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange', () => {
    const mockChange = jest.fn();
    const wrapper = mount(
      <Input
        ariaLabel="email"
        onChange={mockChange}
        value="myemail@gmail.com"
      />,
    );
    wrapper.find('input').simulate('change');
    expect(mockChange).toHaveBeenCalled();
  });
});
