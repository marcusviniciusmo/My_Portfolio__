import styled from 'styled-components';
import { CertificateProps } from '../../@types/Certificates';

export const CertificatesContainer = styled.div.attrs({
  className: 'pageContainer',
})`
  div.certificateContainer {
    margin-block: 3rem 2.4rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Name = styled.span`
  width: 100%;
  height: 8.5rem;
`;

export const Certificate = styled.div<CertificateProps>`
  background: ${(props) =>
    props.theme.title === 'Dark' ? ' transparent' : props.$borderColor};
  border: ${({ theme }) =>
    theme.title === 'Dark' && `2px solid ${theme.colors.borderAlfa}`};
  opacity: ${(props) =>
    props.$isListInHover ? (props.$isItemInHover ? 1 : 0.5) : 1};
  box-shadow: var(--boxShadow);
  font-family: 'Roboto Slab';
  font-weight: bold;
  width: 20rem;
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${Name} {
      text-decoration: underline;
    }
  }
`;

export const Image = styled.img`
  width: 18rem;
  height: 18rem;
`;
