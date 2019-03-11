// External Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Button from './components/Button';
import Input from './components/Input';
import Drawer from './components/Drawer';

// Local Variables
const ContentWrapper = styled.div({
  paddingTop: 100,
  textAlign: 'center',
});
const InputWrapper = styled.div({
  marginBottom: 12,
});

// Component Definition
class App extends Component {
  state = {
    email: '',
    password: '',
  }

  handleClickButton = () => {
    console.log('button clicked');
  }

  handleChangeInput = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Drawer />
        <ContentWrapper>
          <h2>
            Enzyme Testing Demo
          </h2>

          <InputWrapper>
            <Input
              ariaLabel="email"
              name="email"
              onChange={this.handleChangeInput}
              placeholder="Email"
              value={this.state.email}
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              ariaLabel="password"
              name="password"
              onChange={this.handleChangeInput}
              placeholder="Password"
              type="password"
              value={this.state.password}
            />
          </InputWrapper>

          <Button onClick={this.handleClickButton}>
            Sign Up
          </Button>
        </ContentWrapper>
      </div>
    );
  }
}

export default App;
