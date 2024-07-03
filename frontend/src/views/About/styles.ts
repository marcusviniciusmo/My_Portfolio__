import styled from 'styled-components';
import { CardProps } from '../../@types/About';

export const AboutContainer = styled.div.attrs({
  className: 'pageContainer',
})``;

export const Greetings = styled.h1`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-block: 4rem;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: 'Poppins';
  font-size: 1.6rem;
  line-height: 2.8rem;

  p {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

export const Expertise = styled.div`
  padding-block: 4.8rem;

  div.expertiseCards {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3.2rem;
  }
`;

export const Title = styled.h3`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const Card = styled.div<CardProps>`
  background: ${(props) =>
    props.theme.title === 'Dark' ? 'transpartent' : props.$borderColor};
  border: ${({ theme }) =>
    theme.title === 'Dark' && `2px solid ${theme.colors.borderAlfa}`};
  padding: 2.4rem;
  border-radius: 1.2rem;
  display: flex;
  gap: 1.6rem;

  .iconCard {
    font-size: 4rem;
  }

  .languagesIcon {
    color: var(--colorWithBorder1);
  }

  .webDevelopmentIcon {
    color: var(--colorWithBorder2);
  }

  .appDevelopmentIcon {
    color: var(--colorWithBorder3);
  }

  .storageIcon {
    color: var(--colorWithBorder4);
  }

  .agileIcon {
    color: var(--colorWithBorder5);
  }

  .goodPracticesIcon {
    color: var(--colorWithBorder6);
  }

  div.cardTexts {
    display: flex;
    flex-direction: column;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins';
  font-size: 2rem;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 3.2rem;
  margin-top: 0.8rem;
`;
