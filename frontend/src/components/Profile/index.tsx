import { useEffect, useState } from 'react';

import ProfilePhoto from '../../assets/profile/profilePhoto.jpeg';

import { SocialNetworks } from '../SocialNetworks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';

import { ProfileType, ProfileInitialState } from '../../@types/Profile';

import { ProfileContainer, Image, Content, Name, Role } from './styles';

export function Profile() {
  const [profile, setProfile] = useState<ProfileType>(ProfileInitialState);

  useEffect(() => {
    const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
    const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

    fetch(`${baseUrlApi}/profile/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      });
  }, []);

  return (
    <ProfileContainer>
      <Image src={ProfilePhoto} alt={`${profile.name} profile photo`} />

      <Content>
        <Name>{profile.name}</Name>
        <Role>{profile.role}</Role>

        <SocialNetworks />

        <ProfileInfo />

        <DownloadCV />
      </Content>
    </ProfileContainer>
  );
}
