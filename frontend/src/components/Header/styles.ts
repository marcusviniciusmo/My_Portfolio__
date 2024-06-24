import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const HeaderContainer = styled.header`
  margin-inline: 8rem;
  padding: 5rem 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .homeIcon {
    color: ${({ theme }) => theme.colors.primaryText};
    box-shadow: var(--boxShadow);
    font-size: 4.2rem;
    padding: 0.5rem;
    border-radius: 1rem;
    transition: filter 300ms;
    cursor: pointer;
  }

  .homeIcon:hover {
    ${setBackgroundGradient()};
    color: var(--textWhite);
    filter: drop-shadow(0 0 10px var(--textWhite));
  }
`;
