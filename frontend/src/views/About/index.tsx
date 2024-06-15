import { TitleContentPage } from '../../components/TitleContentPage';

import { AboutContainer } from './styles';

export function About() {
  return (
    <AboutContainer>
      <TitleContentPage title="About Me" $left="20.8" />
      <h1>ABOUT COMPONENT</h1>
    </AboutContainer>
  );
}
