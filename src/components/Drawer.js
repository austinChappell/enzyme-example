// External Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import { COLORS } from '../constants/styles';

// Local Variables
const StyledDiv = styled.div(props => ({
  alignItems: 'flex-start',
  backgroundColor: COLORS.primaryLight,
  boxShadow: '2px 2px 4px 1px #777',
  display: 'flex',
  height: '100vh',
  justifyContent: 'flex-end',
  left: props.isOpen ? 0 : -300,
  position: 'fixed',
  transition: '1000ms',
  width: 400,
}));

// Component Definition
class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleDrawer = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    return (
      <StyledDiv isOpen={this.state.isOpen}>
        <button
          onClick={this.toggleDrawer}
          type="button"
        >
          {this.state.isOpen ? 'Close Drawer' : 'Open Drawer'}
        </button>
      </StyledDiv>
    );
  }
}

export default Drawer;
