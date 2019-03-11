import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains "Enzyme Demo"', () => {
    const wrapper = render(<App />);
    expect(wrapper.text()).toContain('Enzyme Testing Demo');
  });
});
