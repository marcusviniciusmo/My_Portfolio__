import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 28.8rem;
  margin-top: 2rem;
  padding: 1.2rem;
  border: ${({ theme }) => `1px solid ${theme.colors.primaryText}`};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const InputSearch = styled.input`
  border: 0;
  flex: 1;
  outline: none;
`;

export const Results = styled.span`
  font-size: 1.4rem;
  font-style: italic;
  margin-top: 1.5rem;
  display: block;
`;
