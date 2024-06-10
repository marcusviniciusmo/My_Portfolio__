import styled from 'styled-components';

export const borderColors = ['#FCF4FF', '#EEFBFF', '#FFF0F0'];

export const CertificatesContainer = styled.div`
  margin-block: 3rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
`;

export const CertificateContainer = styled.div<{ borderColor: string }>`
  background: ${(props) =>
    props.theme.title === 'Dark' ? ' transparent' : props.borderColor};
  border: ${({ theme }) => theme.title === 'Dark' && '0.5px solid #CECECE'};
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
  overflow: hidden;
  gap: 1.2rem;
  box-shadow:
    0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -2px rgba(0, 0, 0, 0.1);

  img {
    width: 18rem;
    height: 18rem;
  }

  span {
    min-height: 5rem;
  }

  &:hover {
    border: ${({ theme }) => theme.title === 'Light' && '0.5px solid #AEAEAE'};
    opacity: ${({ theme }) => theme.title === 'Dark' && '0.7'};
    cursor: pointer;

    span {
      text-decoration: underline;
    }
  }
`;
