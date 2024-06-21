import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const ThemeSwitcherContainer = styled.div`
  color: ${({ theme }) =>
    theme.title === 'Light' ? 'var(--colorIconDark)' : 'var(--colorIconLight)'};
  background: var(--backgroundWhite);
  box-shadow: var(--boxShadow);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    ${setBackgroundGradient()};
    color: var(--textWhite);
  }
`;
