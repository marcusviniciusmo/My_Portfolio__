import styled from 'styled-components';
import { ImageModalProps, RowTableModalProps } from '../../@types/Certificates';

export const Body = styled.div.attrs({
  className: 'modalBody',
})``;

export const ImageContainer = styled.div.attrs({
  className: 'modalImageContainer',
})<ImageModalProps>`
  background: url(${(props) => props.$background}) no-repeat;
  background-position: 50% 50%;
  background-size: 60rem 60rem;
  height: 30rem;

  &:hover {
    background-position: 0rem 0rem;
    background-size: 30rem 30rem;
    transform: scale(2);
  }
`;

export const Table = styled.table.attrs({
  className: 'modalTable',
})``;

export const Row = styled.tr<RowTableModalProps>`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  opacity: ${(props) =>
    props.$isListInHover ? (props.$isItemInHover ? 1 : 0.5) : 1};
`;
