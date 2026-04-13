
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogsGet from './pages/admin/BlogsGet';
import BlogsEdit from './pages/admin/BlogsEdit';
import BlogsView from './pages/admin/BlogsView';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Blog from './pages/admin/Blogs';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Services from './pages/ServicesPage'
import Portfolio from './pages/Portfolio'
import Packages from './pages/Packages'
import Career from './pages/Career'

import 'aos/dist/aos.css';


// import './assets/css/style.css';
// import './assets/css/common.css';


// import common from '..public/common'

function App() {
 

 return (
  <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/careers" element={<Career />} />
         <Route path="/admin" element={<Dashboard />} />
           <Route path="/admin/blogs" element={<Blog />} />
            <Route path="/admin/blogs-get" element={<BlogsGet />} />
            <Route path="/admin/blogs/:id/edit" element={<BlogsEdit />} />
              <Route path="/admin/blogs/:id/view" element={<BlogsView />} />

      </Routes>
  </>
 )
}

export default App;
