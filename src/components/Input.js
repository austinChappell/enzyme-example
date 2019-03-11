// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

// Internal Dependencies
import { COLORS } from '../constants/styles';

// Local Variables
const StyledInput = styled.input({
  border: `1px solid ${COLORS.primaryMain}`,
  borderRadius: 8,
  fontSize: 16,
  outline: 'none',
  padding: 8,
  transition: '200ms',
  '&:focus': {
    boxShadow: `
      1px 1px 4px ${COLORS.primaryLight},
      -1px -1px 4px ${COLORS.primaryLight},
      1px -1px 4px ${COLORS.primaryLight},
      -1px 1px 4px ${COLORS.primaryLight}
    `,
  }
});

// Component Definition
class Input extends Component {
  static propTypes = {
    ariaLabel: PropTypes.shape.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    placeholder: null,
    type: 'text',
  };

  render() {
    return (
      <StyledInput
        aria-label={this.props.ariaLabel}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        type={this.props.type}
        value={this.props.value}
      />
    );
  }
}

export default Input;
