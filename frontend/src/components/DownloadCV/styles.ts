import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

const DownloadCVContainerModel = styled.a`
  margin: 2.4rem auto 0;
  padding: 1.2rem 3.2rem;
  display: inline-flex;
`;
export const DownloadCVContainer = styled(DownloadCVContainerModel)`
  ${setBackgroundGradient()}
  color: var(--textWhite);
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 3.5rem;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  &:hover {
    ${setBackgroundGradient('to left')};
  }
`;

export const DownloadCVContainerSkeleton = styled(
  DownloadCVContainerModel,
).attrs({
  className: 'skeleton',
})`
  width: 15rem;
  height: 2rem;
`;
