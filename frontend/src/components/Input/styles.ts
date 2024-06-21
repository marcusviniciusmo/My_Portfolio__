import styled from 'styled-components';

export const InputContainer = styled.div.attrs({
  className: 'fieldInputContainer',
})``;

export const Label = styled.label.attrs({
  className: 'fieldInputLabel',
})``;

export const StyledInput = styled.input.attrs({
  className: 'fieldInputStyled',
})`
  &:focus + ${Label}, &:valid + ${Label} {
    transform: translate(0.5rem, -3rem) scale(0.88);
    z-index: var(--max-z-index);
  }
`;
