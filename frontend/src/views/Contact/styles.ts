import styled from 'styled-components';

export const ContactContainer = styled.div``;

export const Text = styled.h1`
  font-weight: normal;
  text-align: center;
  margin-bottom: 5rem;
  word-break: break-all;
`;

export const ContactForm = styled.form`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ContactInputs = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textButton};
  border: 2px solid ${({ theme }) => theme.colors.borderButtonSubmit};
  font-weight: bold;
  width: 14.3rem;
  height: 5rem;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  margin: 0 auto;

  &:hover {
    background: linear-gradient(
      to right,
      var(--gradientHoverBackgroundFrom),
      var(--gradientHoverBackgroundTo)
    );
    color: var(--textWhite);
  }
`;
