import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const ContactContainer = styled.div.attrs({
  className: 'pageContainer',
})``;

export const Form = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Text = styled.h1`
  font-weight: normal;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Inputs = styled.div`
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
  margin: 0 auto;
  padding: 1rem 2.5rem;
  border-radius: 2rem;

  &:hover {
    ${setBackgroundGradient()};
    color: var(--textWhite);
  }
`;
