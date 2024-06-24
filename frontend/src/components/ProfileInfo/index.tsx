import { useEffect, useState } from 'react';

import { ProfileInfoData } from '../../data/profileInfo';
import { ProfileInfoType } from '../../@types/ProfileInfo';

import { ProfileInfoContainer, Icon, Info, Label, Data } from './styles';

export function ProfileInfo() {
  const [profileInfoData, setProfileInfoData] = useState<ProfileInfoType[]>([]);

  useEffect(() => {
    setProfileInfoData(ProfileInfoData);
  }, []);

  return (
    <ProfileInfoContainer>
      {profileInfoData.map((info) => {
        return (
          <div key={info.id} className="profileInfoContainer">
            <Icon className={info.className}>
              <info.icon fontSize="large" />
            </Icon>

            <Info>
              <Label>{info.label}</Label>

              <Data $link={info.link!}>
                <a href={info.link} target="_blank" rel="noreferrer">
                  {info.data}
                </a>
              </Data>
            </Info>
          </div>
        );
      })}
    </ProfileInfoContainer>
  );
}
