// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import { COLORS } from '../constants/styles';

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
const defaultProps = {

};
const StyledButton = styled.button({
  background: `linear-gradient(120deg, ${COLORS.primaryMain}, ${COLORS.secondaryMain})`,
  borderRadius: 8,
  color: '#fff',
  cursor: 'pointer',
  fontSize: 20,
  padding: 8,
  '&:hover': {
    background: `linear-gradient(120deg, ${COLORS.primaryDark}, ${COLORS.secondaryDark})`,
  },
});

// Component Definition
const Button = ({
  children,
  onClick,
}) => (
  <StyledButton
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
