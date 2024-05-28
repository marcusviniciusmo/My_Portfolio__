import styled from 'styled-components';

export const MenuContainer = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  width: 14.5rem;
  height: 100%;
  margin: 0 0 4rem;
  padding: 3rem;
  border-radius: 1.6rem;
  display: block;
  position: relative;
  top: 17.6rem;
`;

export const MenuItemsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.a`
  background: ${({ theme }) => theme.colors.backgroundMenuItem};
  color: ${({ theme }) => theme.colors.textMenuItem};
  font-size: 1.3rem;
  font-weight: bold;
  width: 100%;
  height: 8rem;
  margin-block: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  gap: 1rem;
  cursor: pointer;
`;
