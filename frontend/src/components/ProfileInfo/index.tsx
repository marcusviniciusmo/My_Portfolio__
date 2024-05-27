import {
  Smartphone,
  Email,
  LocationOn,
  CalendarMonth,
} from '@mui/icons-material';
import {
  ProfileInfosContainer,
  Info,
  InfoIcon,
  ProfileInfo,
  ProfileInfoLabel,
  ProfileInfoData,
} from './styles';

export function ProfileInfos() {
  return (
    <ProfileInfosContainer>
      <Info>
        <InfoIcon className="smartphoneIcon gradientHover gradientHoverToRight">
          <Smartphone fontSize="large" />
        </InfoIcon>
        <ProfileInfo>
          <ProfileInfoLabel>Phone</ProfileInfoLabel>
          <ProfileInfoData>
            <a
              href="https://wa.me/3530832084998"
              target="_blank"
              rel="noreferrer"
            >
              +353 083 208 4998
            </a>
          </ProfileInfoData>
        </ProfileInfo>
      </Info>

      <Info>
        <InfoIcon className="emailIcon gradientHover gradientHoverToRight">
          <Email fontSize="large" />
        </InfoIcon>
        <ProfileInfo>
          <ProfileInfoLabel>Email</ProfileInfoLabel>
          <ProfileInfoData>
            <a
              href="mailto:marcus.viniciusmo@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              marcus.viniciusmo@hotmail.com
            </a>
          </ProfileInfoData>
        </ProfileInfo>
      </Info>

      <Info>
        <InfoIcon className="locationIcon gradientHover gradientHoverToRight">
          <LocationOn fontSize="large" />
        </InfoIcon>
        <ProfileInfo>
          <ProfileInfoLabel>Location</ProfileInfoLabel>
          <ProfileInfoData>Dublin, Ireland</ProfileInfoData>
        </ProfileInfo>
      </Info>

      <Info>
        <InfoIcon className="birthdayIcon gradientHover gradientHoverToRight">
          <CalendarMonth fontSize="large" />
        </InfoIcon>
        <ProfileInfo>
          <ProfileInfoLabel>Birthday</ProfileInfoLabel>
          <ProfileInfoData>December 28, 1984</ProfileInfoData>
        </ProfileInfo>
      </Info>
    </ProfileInfosContainer>
  );
}
