import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Course = ({ course, onCourseSelect, selectedCourses }) => {
  const { id, cover, title, description, price, credit } = course;

  const handleSelect = () => {
    onCourseSelect(course);
  };

  const isSelected = selectedCourses.find((selectedCourse) => selectedCourse.id === id);

  return (
    <div className={`card w-72 bg-base-100 shadow-2xl ${isSelected ? 'selected' : ''}`}>
      <figure className="mx-5 mt-5 bg-[#F8F8F8] rounded-xl">
        <img src={cover} alt="" />
      </figure>
      <div className="card-body items-center">
        <h1 className="text-sm font-semibold">{title}</h1>
        <h5 className="text-sm text-zinc-500">{description}</h5>
        <div className="flex gap-2">
          <p className="font-medium text-sm flex items-center">
            <BiDollar />
            Price: ${price}
          </p>
          <p className="font-medium text-sm flex items-center">
            <BsBook />
            Credit: {credit}
          </p>
        </div>
        <button className={`w-full btn btn-primary text-white`} onClick={handleSelect}>
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default Course;
