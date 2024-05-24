import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { About } from '../components/About';
import { Resume } from '../components/Resume';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
