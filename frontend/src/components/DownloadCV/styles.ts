import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const DownloadCVContainer = styled.a`
  ${setBackgroundGradient()}
  color: var(--textWhite);
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2.4rem auto 0;
  padding: 1.2rem 3.2rem;
  border-radius: 3.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  &:hover {
    ${setBackgroundGradient('to left')};
  }
`;
