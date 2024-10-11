import styled from 'styled-components';
import { BlogProps } from '../../@types/Blogs';

export const BlogsContainer = styled.div.attrs({
  className: 'pageContainer',
})`
  div.blogsContainer {
    margin-block: 3rem 2.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Name = styled.h3`
  margin-top: 2rem;
`;

const BlogModel = styled.div`
  width: 32rem;
  margin: 2rem;
  padding: 2rem;
`;
export const Blog = styled(BlogModel)<BlogProps>`
  background: ${(props) =>
    props.theme.title === 'Dark' ? 'transparent' : props.$borderColor};
  border: ${({ theme }) =>
    theme.title === 'Dark' && `2px solid ${theme.colors.borderAlfa}`};
  opacity: ${(props) =>
    props.$isListInHover ? (props.$isItemInHover ? 1 : 0.5) : 1};
  box-shadow: var(--boxShadow);
  font-family: 'Roboto Slab';
  border-radius: 0.8rem;

  &:hover {
    ${Name} {
      text-decoration: underline;
    }
  }
`;

export const BlogSkeleton = styled(BlogModel).attrs({
  className: 'skeleton',
})`
  height: 15rem;
`;

export const ImageContainer = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 15rem;
    border-radius: 0.8rem;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      scale: 1.1;
    }
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;
