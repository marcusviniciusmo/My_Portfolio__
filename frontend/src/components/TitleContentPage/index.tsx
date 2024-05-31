import { Title } from './styles';

interface TitleContentPageProps {
  title: string;
  left: string;
}

export function TitleContentPage({ title, left }: TitleContentPageProps) {
  return <Title left={left}>{title}</Title>;
}
