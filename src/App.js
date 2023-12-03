import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from "./Pages/CourseDetails";
import CourseListing from "./Pages/CourseListing";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route index element={<CourseDetails />} />
        <Route path="blogs" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
