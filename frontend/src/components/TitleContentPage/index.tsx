import { TitleContentPageProps } from '../../@types/TitleContentPage';
import { Title } from './styles';

export function TitleContentPage({ title, left }: TitleContentPageProps) {
  return <Title left={left}>{title}</Title>;
}
