import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Profile />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Menu />
      <GlobalStyle />
    </>
  );
}
