import styled from 'styled-components';

export const InputContainer = styled.div``;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textLabelInput};
`;

export const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.borderInput};

  &:focus,
  &:valid {
    border: 2px solid ${({ theme }) => theme.colors.borderInputFocused};
  }

  &:focus + ${Label}, &:valid + ${Label} {
    transform: translate(0.5rem, -3rem) scale(0.88);
    z-index: var(--max-z-index);
  }
`;
