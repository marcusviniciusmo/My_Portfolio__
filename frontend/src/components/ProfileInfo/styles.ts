import styled from 'styled-components';

export const ProfileInfosContainer = styled.div`
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
