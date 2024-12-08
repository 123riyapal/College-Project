import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from '../Course';
import CourseEnquiry from '../CourseEnquiry';

function MainCourse() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/enquiry" element={<CourseEnquiry />} />
      </Routes>
    </Router>
  );
}

export default MainCourse;
