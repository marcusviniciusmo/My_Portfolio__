import ProfilePhoto from '../../assets/profilePhoto.jpeg';
import {
  LinkedIn,
  GitHub,
  WhatsApp,
  Instagram,
  Email,
  Smartphone,
  LocationOn,
  CalendarMonth,
  Download,
} from '@mui/icons-material';
import {
  ProfileContainer,
  Image,
  Content,
  Name,
  Role,
  SocialNetworks,
  SocialIcon,
  ProfileInfos,
  Info,
  InfoIcon,
  ProfileInfo,
  ProfileInfoLabel,
  ProfileInfoData,
  DownloadCurriculumButton,
} from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <Image src={ProfilePhoto} alt="Marcus_profile_photo" />

      <Content>
        <Name>Marcus Oliveira</Name>
        <Role>Front-end Developer</Role>

        <SocialNetworks>
          <a
            href="https://www.linkedin.com/in/marcus-viniciusmo/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              className="linkedinLogo gradientHover gradientHoverToRight"
              title="Linkedin"
            >
              <LinkedIn fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="https://github.com/marcusviniciusmo"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              className="githubLogo gradientHover gradientHoverToRight"
              title="Github"
            >
              <GitHub fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="https://wa.me/3530832084998"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              className="whatsappLogo gradientHover gradientHoverToRight"
              title="Whatsapp"
            >
              <WhatsApp fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="https://www.instagram.com/projit.world/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              className="instagramLogo gradientHover gradientHoverToRight"
              title="Instagram"
            >
              <Instagram fontSize="large" />
            </SocialIcon>
          </a>

          <a
            href="mailto:marcus.viniciusmo@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon
              className="emailLogo gradientHover gradientHoverToRight"
              title="Email"
            >
              <Email fontSize="large" />
            </SocialIcon>
          </a>
        </SocialNetworks>

        <ProfileInfos>
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
        </ProfileInfos>

        <DownloadCurriculumButton className="backgroundGradientToRight gradientHover gradientHoverToLeft">
          <Download className="downloadIcon" fontSize="large" />
          Download CV
        </DownloadCurriculumButton>
      </Content>
    </ProfileContainer>
  );
}
