import { useEffect, useState } from 'react';

import { SocialNetworkList } from '../../data/socialNetworks';
import { SocialNetworkType } from '../../@types/SocialNetworks';

import { SocialNetworksContainer, SocialIcon } from './styles';

export function SocialNetworks() {
  const [socialNetworks, setSocialNetworks] = useState<SocialNetworkType[]>([]);

  useEffect(() => {
    setSocialNetworks(SocialNetworkList);
  }, []);

  return (
    <SocialNetworksContainer>
      {socialNetworks.map((network) => {
        return (
          <div key={network.id}>
            <a href={network.link} target="_blank" rel="noreferrer">
              <SocialIcon className={network.className} title={network.title}>
                <network.icon fontSize="large" />
              </SocialIcon>
            </a>
          </div>
        );
      })}
    </SocialNetworksContainer>
  );
}
