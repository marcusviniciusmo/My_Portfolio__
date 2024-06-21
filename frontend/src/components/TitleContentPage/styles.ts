import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  font-size: 4rem;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    ${setBackgroundGradient()};
    width: 19rem;
    height: 0.2rem;
    margin-left: 2.5rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 50%;
  }
`;
