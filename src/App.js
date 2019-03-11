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
  handleButtonClick = () => {
    console.log('button clicked');
  }

  render() {
    return (
      <ContentWrapper>
        <Button onClick={this.handleButtonClick}>
          Click Me!
        </Button>

        <InputWrapper>
          <Input
            placeholder="Enter Text Here..."
          />
        </InputWrapper>
      </ContentWrapper>
    );
  }
}

export default App;
