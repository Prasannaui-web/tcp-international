import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ProjectPage from "./Pages/Projects";
import ServicePage from "./Pages/Services";
import ContactPage from "./Pages/Contact";
import CareerPage from "./Pages/Career";

import "./App.css"

export default function App() {
  return (
    <div>
      <BrowserRouter basename="/tcp-international">
        <Routes>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
