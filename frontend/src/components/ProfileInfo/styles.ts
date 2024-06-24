import styled from 'styled-components';
import { ProfileInfoDataProps } from '../../@types/ProfileInfo';

export const ProfileInfoContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  margin-top: 2.8rem;
  padding: 2.8rem;
  border-radius: 1.6rem;

  div.profileInfoContainer {
    padding-bottom: 1rem;
    display: flex;
    align-items: center;

    &:not(:first-child) {
      padding-top: 1rem;
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    }
  }
`;

export const Icon = styled.span`
  background: ${({ theme }) => theme.colors.primaryBackground};
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: var(--boxShadow);

  &.smartphoneIcon {
    color: ${({ theme }) => theme.icons.phoneIcon};
  }

  &.emailIcon {
    color: ${({ theme }) => theme.icons.emailIcon};
  }

  &.locationIcon {
    color: ${({ theme }) => theme.icons.locationIcon};
  }

  &.birthdayIcon {
    color: ${({ theme }) => theme.icons.birhtdayIcon};
  }
`;

export const Info = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.2rem;
`;

export const Data = styled.p<ProfileInfoDataProps>`
  color: ${({ theme }) => theme.colors.primaryText};

  a {
    cursor: ${(props) => (props.$link ? 'pointer' : 'default')};
    transition-duration: 0.3s;

    &:hover {
      color: var(--gradientBackgroundFrom);
    }
  }
`;
