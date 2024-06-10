import styled from 'styled-components';

interface ImageProps {
  background: string;
}

export const CertificateModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: var(--max-z-index);
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.title === 'Dark' && '0 0 5px #CECECE'};
  width: 90rem;
  height: 50rem;
  border-radius: 2rem;
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

export const ImageContainer = styled.div<ImageProps>`
  background: url(${(props) => props.background}) no-repeat;
  background-position: 50% 50%;
  background-size: 70rem 70rem;
  width: 35rem;
  height: 35rem;
  border-radius: 0.8rem;
  box-shadow:
    2px 4px 6px -1px rgba(0, 0, 0, 0.1),
    2px 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 0rem 0rem;
    background-size: 35rem 35rem;
    transform: scale(2);
  }
`;

export const Data = styled.table`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};

  tr {
    background: ${({ theme }) => theme.colors.backgroundTableModalCertificate};

    &:hover {
      opacity: 0.5;
    }
  }

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
