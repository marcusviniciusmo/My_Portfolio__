import ProfilePhoto from '../../assets/profilePhoto.jpeg';
import { ProfileInfos } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import {
  LinkedIn,
  GitHub,
  WhatsApp,
  Instagram,
  Email,
} from '@mui/icons-material';
import {
  ProfileContainer,
  Image,
  Content,
  Name,
  Role,
  SocialNetworks,
  SocialIcon,
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

        <ProfileInfos />

        <DownloadCV />
      </Content>
    </ProfileContainer>
  );
}
