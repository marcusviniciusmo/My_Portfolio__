import styled from 'styled-components';

export const TextareaContainer = styled.div.attrs({
  className: 'fieldTextareaContainer',
})``;

export const Label = styled.label.attrs({
  className: 'fieldTextareaLabel',
})``;

export const StyledTextarea = styled.textarea.attrs({
  className: 'fieldTextareaStyled',
})`
  &:focus + ${Label}, &:valid + ${Label} {
    transform: translate(0.5rem, -3rem) scale(0.88);
    z-index: var(--max-z-index);
  }
`;
