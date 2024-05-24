import styled from 'styled-components';

export const IconContainer = styled.div`
  color: ${({ theme }) => (theme.title === 'Light' ? 'darkblue' : 'orange')};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
