import styled from 'styled-components';

interface TitleProps {
  left: string;
}

export const Title = styled.h2<TitleProps>`
  font-family: 'Roboto Slab';
  font-size: 4rem;
  font-weight: 700;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    background-image: linear-gradient(
      to right,
      var(--gradientHoverBackgroundFrom),
      var(--gradientHoverBackgroundTo)
    );
    width: 19.2rem;
    height: 0.2rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 50%;
    left: ${(props) => props.left}rem;
  }
`;
