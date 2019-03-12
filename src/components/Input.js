// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
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
  },
});

// Local Variables
const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};
const defaultProps = {
  placeholder: null,
  name: null,
  type: 'text',
};

// Component Definition
const Input = ({
  ariaLabel,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => (
  <StyledInput
    aria-label={ariaLabel}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
