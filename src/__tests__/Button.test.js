// External Dependencies
import React from 'react';
import { shallow } from 'enzyme';

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
});
