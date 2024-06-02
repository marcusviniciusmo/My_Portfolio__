import styled from 'styled-components';

export const TextareaContainer = styled.div``;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textLabelTextarea};
`;

export const StyledTextarea = styled.textarea`
  border: 2px solid ${({ theme }) => theme.colors.borderTextarea};

  &:focus,
  &:valid {
    border: 2px solid ${({ theme }) => theme.colors.borderTextareaFocused};
  }

  &:focus + ${Label}, &:valid + ${Label} {
    transform: translate(0.5rem, -3rem) scale(0.88);
    z-index: var(--max-z-index);
  }
`;
