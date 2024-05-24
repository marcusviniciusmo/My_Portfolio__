import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-inline: 8rem;
  padding: 5rem 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .headerIcon {
    color: ${({ theme }) => theme.colors.text};
    font-size: 4.2rem;
    padding-top: 0.4rem;
    transition: filter 300ms;
  }

  .headerIcon:hover {
    filter: drop-shadow(0 0 10px #ffffff);
  }
`;
