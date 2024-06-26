import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const MenuContainer = styled.nav.attrs({
  className: 'viewContent',
})`
  width: 14.5rem;
  margin-bottom: 4rem;
  padding: 3rem;
  display: block;
`;

export const MenuItemsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.secondaryText};
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
  gap: 1rem;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    ${setBackgroundGradient()};
    color: var(--textWhite);
  }
`;
