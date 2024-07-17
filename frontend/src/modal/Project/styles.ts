import styled from 'styled-components';
import { ImageContainerProps, RowTableModalProps } from '../../@types/Projects';

export const Body = styled.div.attrs({
  className: 'modalBody',
})`
  flex-direction: column;

  div.bodyDirectionRow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  div.bodyInfo {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    div.projectTechs {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
    }
  }
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryText};
  color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
`;

export const ImageContainer = styled.div.attrs({
  className: 'modalImageContainer',
})<ImageContainerProps>`
  background: url(${(props) => props.$background}) no-repeat;
  background-position: 50% 50%;
  background-size: 60rem 60rem;
`;

export const Table = styled.table.attrs({
  className: 'modalTable',
})``;

export const Row = styled.tr<RowTableModalProps>`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  opacity: ${(props) =>
    props.$isListInHover ? (props.$isItemInHover ? 0.5 : 1) : 1};

  div.rowLinkIcon {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 0.5rem;
`;
