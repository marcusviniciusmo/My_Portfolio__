import styled from 'styled-components';
import { ProjectProps } from '../../@types/Projects';

export const ProjectsContainer = styled.div.attrs({
  className: 'pageContainer',
})`
  div.projectsContainer {
    margin-block: 3rem 2.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Name = styled.h3`
  margin-top: 2rem;
  overflow: hidden;
`;

export const Project = styled.div<ProjectProps>`
  background: ${(props) =>
    props.theme.title === 'Dark' ? 'transparent' : props.$borderColor};
  border: ${({ theme }) =>
    theme.title === 'Dark' && `2px solid ${theme.colors.borderAlfa}`};
  opacity: ${(props) =>
    props.$isListInHover ? (props.$isItemInHover ? 1 : 0.5) : 1};
  box-shadow: var(--boxShadow);
  font-family: 'Roboto Slab';
  width: 32rem;
  margin: 2rem;
  padding: 2rem;
  border-radius: 0.8rem;

  &:hover {
    ${Name} {
      text-decoration: underline;
    }
  }

  div.links {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
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

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
  height: 10rem;
  margin-block: 2rem;
  padding: 0.5rem;
  overflow: hidden;
`;

export const Repository = styled.a`
  cursor: pointer;
`;

export const Url = styled.a`
  cursor: pointer;
`;
