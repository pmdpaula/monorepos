import styled from 'styled-components';
import get from 'lodash/get';


export interface ButtonWrapperProps {
  color: 'primary.main' | 'secondary.main' | 'tertiary.main';
}

export const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: ${({ theme }) => theme.borderRadius};

  color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
  background: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
    border: 1 solid #333;
  }
`;