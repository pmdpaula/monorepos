import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './style/ButtonWrapper';

interface ButtonBaseProps {
  type?: 'button' | 'submit' | 'reset';
  /**
   * Essa prop usa o disabled padrão HTML e aplica um CSS junto.
  */
  disabled?: boolean;
  /**
   * passe via children o que deseja renderizar dentro do botão
   */
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type ButtonProps = ButtonBaseProps & ButtonWrapperProps;

const Button = ({
  type,
  color,
  disabled,
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper
      type={type}
      disabled={disabled}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button;

Button.defaultProps = {
  disabled: false,
  type: 'button',
  color: 'primary.main',
  onClick: () => {}
}