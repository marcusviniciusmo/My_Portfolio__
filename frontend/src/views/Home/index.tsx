import Avatar from '../../assets/avatar.jpg';
import SetupImage from '../../assets/setupImage.svg';
import {
  HomeContainer,
  Title,
  Subtitle,
  AvatarContainer,
  Setup,
} from './styles';

export function Home() {
  return (
    <HomeContainer className="contentContainer">
      <Title>Front-End Developer & Lifelong Learner</Title>
      <Subtitle>
        I create user experiences through code and design, driven by a passion
        for continuous learning.
      </Subtitle>
      <AvatarContainer src={Avatar} />
      <Setup src={SetupImage} />
    </HomeContainer>
  );
}
