import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants/styles';

const StyledButton = styled.button({
  background: `linear-gradient(120deg, ${COLORS.primaryMain}, ${COLORS.secondaryMain})`,
  borderRadius: 8,
  color: '#fff',
  cursor: 'pointer',
  fontSize: 20,
  padding: 8,
  '&:hover': {
    background: `linear-gradient(120deg, ${COLORS.primaryDark}, ${COLORS.secondaryDark})`,
  }
});

const Button = ({
  children,
  onClick,
}) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button;
