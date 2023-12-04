import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from "./Pages/CourseDetails";
import CourseListing from "./Pages/CourseListing";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/details/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
