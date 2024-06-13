import styled from 'styled-components';

export const HomeContainer = styled.div.attrs({
  className: 'pageContainer',
})`
  font-family: 'Poppins';
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
`;

export const Avatar = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin-block: 4rem;
  box-shadow: var(--boxShadowDark);
`;

export const Setup = styled.img`
  width: 60rem;
  height: 30rem;
  box-shadow: var(--boxShadowDark);
`;
