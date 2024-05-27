import {
  LinkedIn,
  GitHub,
  WhatsApp,
  Instagram,
  Email,
} from '@mui/icons-material';
import { SocialNetworksContainer, SocialIcon } from './styles';

export function SocialNetworks() {
  return (
    <SocialNetworksContainer>
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

      <a href="https://wa.me/3530832084998" target="_blank" rel="noreferrer">
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
    </SocialNetworksContainer>
  );
}
