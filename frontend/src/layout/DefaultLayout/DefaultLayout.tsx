import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { Menu } from '../../components/Menu';
import { ContentLayout } from '../ContentLayout';

import { DefaultLayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <DefaultLayoutContainer>
        <Profile />
        <ContentLayout>
          <Outlet />
        </ContentLayout>
        <Menu />
      </DefaultLayoutContainer>
    </div>
  );
}
