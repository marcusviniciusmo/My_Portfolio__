import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { About } from '../components/About';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
