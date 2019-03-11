// External Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import Button from './components/Button';
import Input from './components/Input';

// Local Variables
const ContentWrapper = styled.div({
  paddingTop: 100,
  textAlign: 'center',
})
const InputWrapper = styled.div({
  marginTop: 12,
})

// Component Definition
class App extends Component {
  state = {
    input: '',
  }

  handleClickButton = () => {
    console.log('button clicked');
  }

  handleChangeInput = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    return (
      <ContentWrapper>
        <Button onClick={this.handleClickButton}>
          Click Me!
        </Button>

        <InputWrapper>
          <Input
            ariaLabel="email"
            onChange={this.handleChangeInput}
            placeholder="Enter Text Here..."
            value={this.state.input}
          />
        </InputWrapper>
      </ContentWrapper>
    );
  }
}

export default App;
