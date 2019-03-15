// External Dependencies
import React from 'react';
import { render, shallow } from 'enzyme';

// Internal Dependencies
import App from '../App';

describe('<App />', () => {
  it('will render', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('contains "Enzyme Testing Demo', () => {
    const wrapper = render(
      <App />,
    );
    expect(wrapper.text()).toContain('Enzyme Testing Demo');
  });
});
