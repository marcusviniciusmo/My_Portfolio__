import styled from 'styled-components';

export const ProfileContainer = styled.aside`
  width: 40rem;
  text-align: center;
  padding-inline: 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  box-shadow: ${({ theme }) => theme.colors.shadow};
  width: 24rem;
  height: 24rem;
  margin: -14rem auto 0;
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  padding-block: 10rem 3.2rem;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.6rem;
  margin-block: 2.4rem 0.4rem;
`;

export const Role = styled.h3`
  background: ${({ theme }) => theme.colors.backgroundRole};
  color: ${({ theme }) => theme.colors.textRole};
  font-weight: inherit;
  margin-bottom: 1.6rem;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  display: inline-block;
`;
