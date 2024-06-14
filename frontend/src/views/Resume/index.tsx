import { TitleContentPage } from '../../components/TitleContentPage';

import { ResumeContainer } from './styles';

export function Resume() {
  return (
    <ResumeContainer>
      <TitleContentPage title="Resume" $left="17.6" />
      <h1>RESUME COMPONENT</h1>
    </ResumeContainer>
  );
}
