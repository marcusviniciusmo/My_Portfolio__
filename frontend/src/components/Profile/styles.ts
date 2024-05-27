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

export const ProfileInfos = styled.div`
  background: ${({ theme }) => theme.colors.backgroundProfileInfos};
  margin-top: 2.8rem;
  padding: 2.8rem;
  border-radius: 1.6rem;
`;

export const Info = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    padding-top: 1rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottomInfo};
  }
`;

export const InfoIcon = styled.span`
  background: ${({ theme }) => theme.colors.backgroundIconInfo};
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

  &.smartphoneIcon {
    color: var(--colorProfileIconSmartphone);
  }

  &.emailIcon {
    color: var(--colorProfileIconEmail);
  }

  &.locationIcon {
    color: var(--colorProfileIconLocation);
  }

  &.birthdayIcon {
    color: var(--colorProfileIconBirthday);
  }
`;

export const ProfileInfo = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

export const ProfileInfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.textProfileInfoLabel};
  font-size: 1.2rem;
`;

export const ProfileInfoData = styled.p`
  color: ${({ theme }) => theme.colors.text};
  word-break: break-all;

  a {
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      color: var(--colorProfileInfoDataHover);
    }
  }
`;
