import { useEffect, useState } from 'react';

import ProfilePhoto from '../../assets/profile/profilePhoto.jpeg';

import { SocialNetworks } from '../SocialNetworks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';

import { ProfileType, ProfileInitialState } from '../../@types/Profile';

import * as Styles from './styles';

export function Profile() {
  const [profile, setProfile] = useState<ProfileType>(ProfileInitialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
    const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

    setIsLoading(true);

    fetch(`${baseUrlApi}/profile/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Styles.ProfileContainer>
      <Styles.Image src={ProfilePhoto} alt={`${profile.name} profile photo`} />

      <Styles.Content>
        {isLoading ? (
          <>
            <Styles.NameSkeleton />
            <Styles.RoleSkeleton />
          </>
        ) : (
          <>
            <Styles.Name>{profile.name}</Styles.Name>
            <Styles.Role>{profile.role}</Styles.Role>
          </>
        )}

        <SocialNetworks />

        <ProfileInfo />

        <DownloadCV curriculum={profile.curriculum} />
      </Styles.Content>
    </Styles.ProfileContainer>
  );
}
