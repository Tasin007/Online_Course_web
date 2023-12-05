
import React, { useState } from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import Cart from './Components/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelect = (course) => {
    if (!selectedCourses.find((selectedCourse) => selectedCourse.id === course.id)) {
      const totalCreditHours = selectedCourses.reduce(
        (total, selectedCourse) => total + parseFloat(selectedCourse.credit),
        0
      );

      if (totalCreditHours + parseFloat(course.credit) <= 20) {
        setSelectedCourses([...selectedCourses, course]);
        toast.success(`Selected: ${course.title}`);
      } else {
        toast.error('Adding this course will exceed the maximum credit hour limit (20).');
      }
    } else {
      toast.error('This course is already selected.');
    }
  };

  return (
    <>
      <header className="pt-10">
        <h1 className="text-center text-4xl font-bold mb-10">Course Registration</h1>
      </header>
      <div>
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-x-20">
          <Courses onCourseSelect={handleCourseSelect} selectedCourses={selectedCourses} />
          <Cart selectedCourses={selectedCourses} />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
