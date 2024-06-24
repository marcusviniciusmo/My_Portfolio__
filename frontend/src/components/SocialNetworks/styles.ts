import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const SocialNetworksContainer = styled.div`
  margin-inline: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialIcon = styled.span`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.linkedinLogo {
    color: ${({ theme }) => theme.icons.linkedinLogo};
  }

  &.githubLogo {
    color: ${({ theme }) => theme.icons.githubLogo};
  }

  &.whatsappLogo {
    color: ${({ theme }) => theme.icons.whatsappLogo};
  }

  &.instagramLogo {
    color: ${({ theme }) => theme.icons.instagramLogo};
  }

  &.emailLogo {
    color: ${({ theme }) => theme.icons.emailLogo};
  }

  &:hover {
    color: var(--textWhite);
    ${setBackgroundGradient()}
  }
`;
