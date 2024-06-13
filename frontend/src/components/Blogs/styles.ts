import styled from 'styled-components';

interface BlogContainerProps {
  $borderColor: string;
}

export const borderColors = ['#FCF4FF', '#EEFBFF', '#FFF0F0'];

export const BlogsContainer = styled.div`
  margin-block: 3rem 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 2.8rem;
  column-gap: 4rem;
`;

export const BlogContainer = styled.div<BlogContainerProps>`
  background: ${(props) =>
    props.theme.title === 'Dark' ? 'transparent' : props.$borderColor};
  border: ${({ theme }) => theme.title === 'Dark' && '2px solid #212425'};
  margin-bottom: 0.8rem;
  padding: 2rem;
  border-radius: 0.8rem;
`;

export const ImageContainer = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const ImageBlog = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 0.8rem;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

export const Name = styled.h3`
  margin: 2rem 0 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkBlog = styled.a`
  cursor: pointer;
`;
