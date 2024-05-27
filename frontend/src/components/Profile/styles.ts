import styled from 'styled-components';

export const ProfileContainer = styled.aside`
  background: ${({ theme }) => theme.colors.background};
  width: 40rem;
  height: 100%;
  text-align: center;
  padding-inline: 2.4rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 17.6rem;
`;

export const Image = styled.img`
  box-shadow: ${({ theme }) => theme.colors.shadow};
  width: 24rem;
  height: 24rem;
  margin: -14rem auto 0;
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  padding-block: 10rem 3.2rem;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.6rem;
  margin-block: 2.4rem 0.4rem;
`;

export const Role = styled.h3`
  background: ${({ theme }) => theme.colors.backgroundRole};
  color: ${({ theme }) => theme.colors.textRole};
  font-weight: inherit;
  margin-bottom: 1.6rem;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  display: inline-block;
`;

export const SocialNetworks = styled.div`
  margin-inline: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialIcon = styled.span`
  background: ${({ theme }) => theme.colors.backgroundSocialIcon};
  color: ${(props) => props.color};
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
