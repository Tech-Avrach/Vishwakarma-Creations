
import NotFoundPage from "@/pages/404/Page404";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";
import Projects from "@/pages/Projects/Projects";
import Service from "@/pages/Service/Service";
import { Routes, Route } from "react-router-dom";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/services' element={<Service />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* add 404 page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
