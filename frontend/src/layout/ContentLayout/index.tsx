import { ContentLayoutProps } from '../../@types/ContentLayout';

import { ContentLayoutContainer } from './styles';

export function ContentLayout({ children }: ContentLayoutProps) {
  return <ContentLayoutContainer>{children}</ContentLayoutContainer>;
}
