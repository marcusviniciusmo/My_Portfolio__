import styled from 'styled-components';
import { ImageModalProps, RowTableModalProps } from '../../@types/Certificates';

export const CertificateModalContainer = styled.div`
  background: var(--backgroundOpacityModal);
  z-index: var(--max-z-index);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;

  div.certificateModalContent {
    background: ${({ theme }) => theme.colors.primaryBackground};
    box-shadow: var(--boxShadowModal);
    width: 90rem;
    height: 50rem;
    border-radius: 2rem;
  }
`;

export const Header = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  height: 40rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`;

export const ImageContainer = styled.div<ImageModalProps>`
  background: url(${(props) => props.$background}) no-repeat;
  box-shadow: var(--boxShadow);
  background-position: 50% 50%;
  background-size: 70rem 70rem;
  width: 35rem;
  height: 35rem;
  border-radius: 0.8rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 0rem 0rem;
    background-size: 35rem 35rem;
    transform: scale(2);
  }
`;

export const DataTable = styled.table`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.4rem;

  th,
  td {
    padding: 1rem;
    border-radius: 0.2rem;
  }

  td {
    max-width: 30rem;
  }

  a {
    font-weight: bold;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Row = styled.tr<RowTableModalProps>`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  opacity: ${(props) =>
    props.$isListInHover ? (props.$isItemInHover ? 1 : 0.5) : 1};
`;
