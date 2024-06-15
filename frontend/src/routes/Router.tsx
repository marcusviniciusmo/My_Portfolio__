import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout/DefaultLayout';
import { Home } from '../views/Home';
import { Blogs } from '../components/Blogs';

import { About } from '../views/About';
import { Resume } from '../views/Resume';
import { Projects } from '../views/Projects';
import { Certificates } from '../views/Certificates';
import { Testimonials } from '../views/Testimonials';
import { Contact } from '../views/Contact';

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
