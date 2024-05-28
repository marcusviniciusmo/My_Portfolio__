import styled from 'styled-components';

export const HomeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 2rem;
  padding: 4.8rem 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4rem;
`;

export const Title = styled.h1`
  font-family: 'Orbitron';
  font-size: 3rem;
  font-weight: 800;
  word-break: break-all;
`;

export const Subtitle = styled.p`
  font-family: 'Poppins';
  font-size: 1.8rem;
`;

export const AvatarContainer = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin-block: 5rem;
  box-shadow:
    0 0 5px ${({ theme }) => theme.colors.text},
    0 0 5px ${({ theme }) => theme.colors.text};
`;

export const Setup = styled.img`
  width: 60rem;
  height: 30rem;
  box-shadow: ${({ theme }) =>
    theme.title === 'Dark' &&
    `0 0 5px ${theme.colors.text}, inset 0 0 5px ${theme.colors.text}`};
`;
