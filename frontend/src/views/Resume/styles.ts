import styled from 'styled-components';
import { CardProps, SkillProps } from '../../@types/Resume';

export const ResumeContainer = styled.div.attrs({
  className: 'pageContainer',
})`
  div.resumeContainer,
  div.skillsContainer {
    margin-block: 3rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 2.4rem;
    column-gap: 2.4rem;
  }

  div.educationContainer,
  div.experienceContainer {
    height: 50vh;
    overflow: auto;
  }

  .skillsContainer {
    background: ${({ theme }) => theme.colors.secondaryBackground};
    padding: 4.8rem 2.4rem;
    border-radius: 0.8rem;
  }
`;

export const Title = styled.div`
  font-family: 'Poppins';
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .icon {
    color: var(--colorIcon);
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const TitleText = styled.h4`
  font-size: 2.6rem;
  font-weight: 500;
`;

export const Card = styled.div<CardProps>`
  background: ${(props) =>
    props.theme.title === 'Dark' ? 'transparent' : props.$borderColor};
  border: ${({ theme }) =>
    theme.title === 'Dark' && `2px solid ${theme.colors.borderAlfa}`};
  font-family: 'Poppins';
  padding: 1.6rem 1.2rem 1.6rem 2rem;
  border-radius: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 1.4rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-block: 0.8rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

export const Skill = styled.div<SkillProps>`
  border-bottom: ${({ theme }) => `3px solid ${theme.colors.tertiaryText}`};
  margin-bottom: 2.8rem;
  position: relative;

  &::after {
    content: '';
    background-color: red;
    width: ${(props) => props.$percentage}%;
    height: 3px;
    position: absolute;
  }

  div.skillContainer {
    padding: 0.4rem 2rem 0.4rem 0;
    display: flex;
    justify-content: space-between;
  }

  span {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const Knowledges = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;

  div.knowledge {
    background: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.secondaryText};
    border-radius: 0.8rem;
    padding: 0.8rem 2rem;
  }
`;
