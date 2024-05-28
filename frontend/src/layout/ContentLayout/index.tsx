import { ReactNode } from 'react';
import { ContentLayoutContainer } from './styles';

interface ContentLayoutProps {
  children: ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <ContentLayoutContainer className="contentMarginTop">
      {children}
    </ContentLayoutContainer>
  );
}
