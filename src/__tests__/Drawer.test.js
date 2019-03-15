// External Dependencies
import React from 'react';
import { mount, shallow } from 'enzyme';

// Internal Dependencies
import Drawer from '../components/Drawer';

describe('<Drawer />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Drawer />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should mount in a closed state', () => {
    const wrapper = mount(
      <Drawer />,
    );
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('should open when clicked', () => {
    const wrapper = mount(
      <Drawer />,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should close if clicked while open', () => {
    const wrapper = mount(
      <Drawer />,
    );
    wrapper.setState({ isOpen: true });
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(false);
  });
});
