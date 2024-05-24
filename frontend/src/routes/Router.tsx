import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../views/Home';
import { About } from '../components/About';
import { Resume } from '../components/Resume';
import { Projects } from '../components/Projects';
import { Certificates } from '../components/Certificates';
import { Testimonials } from '../components/Testimonials';
import { Blogs } from '../components/Blogs';
import { Contact } from '../components/Contact';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
