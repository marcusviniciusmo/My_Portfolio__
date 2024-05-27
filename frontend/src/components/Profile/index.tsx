import ProfilePhoto from '../../assets/profilePhoto.jpeg';
import { SocialNetworks } from '../SocialNetworks';
import { ProfileInfos } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import { ProfileContainer, Image, Content, Name, Role } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <Image src={ProfilePhoto} alt="Marcus_profile_photo" />

      <Content>
        <Name>Marcus Oliveira</Name>
        <Role>Front-end Developer</Role>

        <SocialNetworks />

        <ProfileInfos />

        <DownloadCV />
      </Content>
    </ProfileContainer>
  );
}
