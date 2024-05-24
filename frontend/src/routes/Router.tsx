import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { About } from '../components/About';
import { Resume } from '../components/Resume';
import { Projects } from '../components/Projects';
import { Certificates } from '../components/Certificates';
import { Testimonials } from '../components/Testimonials';
import { Blogs } from '../components/Blogs';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
