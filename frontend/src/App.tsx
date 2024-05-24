import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Menu />
      <GlobalStyle />
    </>
  );
}
