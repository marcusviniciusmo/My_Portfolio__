import styled from 'styled-components';

export const SocialNetworksContainer = styled.div`
  margin-inline: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialIcon = styled.span`
  background: ${({ theme }) => theme.colors.backgroundSocialIcon};
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.linkedinLogo {
    color: ${({ theme }) => theme.colors.linkedinLogo};
  }

  &.githubLogo {
    color: ${({ theme }) => theme.colors.githubLogo};
  }

  &.whatsappLogo {
    color: ${({ theme }) => theme.colors.whatsappLogo};
  }

  &.instagramLogo {
    color: ${({ theme }) => theme.colors.instagramLogo};
  }

  &.emailLogo {
    color: ${({ theme }) => theme.colors.emailLogo};
  }
`;
