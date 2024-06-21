import { TitleContentPageProps } from '../../@types/TitleContentPage';

import { Title } from './styles';

export function TitleContentPage({ title }: TitleContentPageProps) {
  return <Title>{title}</Title>;
}
