// External Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Internal Dependencies
import Drawer from '../components/Drawer';

describe('<Drawer />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Drawer />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
