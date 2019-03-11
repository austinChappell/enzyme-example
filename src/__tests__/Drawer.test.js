import React from 'react';
import {
  mount,
  shallow,
} from 'enzyme';

import Drawer from '../components/Drawer';

describe('<Drawer />', () => {
  it('should match snapshot', () => {
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

  it('should open when button is clicked', () => {
    const wrapper = mount(
      <Drawer />,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should close if clicked from open state', () => {
    const wrapper = mount(
      <Drawer />,
    );
    wrapper.setState({ isOpen: true });
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(false);
  });
});
