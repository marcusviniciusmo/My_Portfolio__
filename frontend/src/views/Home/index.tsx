import AvatarImage from '../../assets/avatar.jpg';
import SetupImage from '../../assets/setupImage.svg';

import { HomeContainer, Title, Subtitle, Avatar, Setup } from './styles';

export function Home() {
  const HOME_TITLE = 'Front-End Developer & Lifelong Learner';
  const HOME_SUBTITLE = `I create user experiences through code and design, 
    driven by a passion for continuous learning.`;

  return (
    <HomeContainer>
      <Title>{HOME_TITLE}</Title>
      <Subtitle>{HOME_SUBTITLE}</Subtitle>
      <Avatar src={AvatarImage} />
      <Setup src={SetupImage} />
    </HomeContainer>
  );
}
