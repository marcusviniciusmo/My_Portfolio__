import styled from 'styled-components';

export const InputContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Label = styled.label`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textLabelInput};
  font-size: 1.6rem;
  margin: 0 2rem;
  padding: 0 1.5rem;
  position: absolute;
  top: 2rem;
  left: -1rem;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.borderInput};
  background: transparent;
  font-size: 1.6rem;
  line-height: 4rem;
  width: 100%;
  padding: 1rem 3rem;
  border-radius: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;
  z-index: 999;

  &:focus,
  &:valid {
    border: 2px solid ${({ theme }) => theme.colors.borderInputFocused};
  }

  &:focus + ${Label}, &:valid + ${Label} {
    transform: translate(0.5rem, -3rem) scale(0.88);
    z-index: 999;
  }
`;
