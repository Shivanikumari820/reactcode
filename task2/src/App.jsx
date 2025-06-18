import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx"; 
import Courses from "./pages/Courses.jsx";
import Faculty from "./pages/Faculty.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
