
import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Cart = ({ selectedCourses }) => {
  const totalCreditHours = selectedCourses.reduce(
    (total, course) => total + parseFloat(course.credit),
    0
  );
  const totalPrice = selectedCourses.reduce(
    (total, course) => total + parseFloat(course.price),
    0
  );

  return (
    <div className="w-[370px]  ">
      <div className="border rounded-xl bg-white shadow-2xl">
        <div className="flex flex-col w-full">
          <div className="grid card px-4">
            <h1 className="text-[#2F80ED] text-lg font-bold pt-5">
              Credit Hour Remaining: {20 - totalCreditHours} hr
            </h1>
          </div>
          <div className="divider w-[90%] mx-auto"></div>
          <div className="grid min-h-[80px] card pl-4 list-decimal">
            <h1 className="text-xl font-bold">Course Name</h1>
            {selectedCourses.map((course, index) => (
              <p key={index} className="text-sm">
                {`${index + 1}. ${course.title}`}
              </p>
            ))}
          </div>
          <div className="divider w-[90%] mx-auto"></div>
          <div className="grid card px-4">
            <h1 className="text-base font-medium">
              Total credit Hour: {totalCreditHours} hr
            </h1>
          </div>
          <div className="divider w-[90%] mx-auto "></div>
          <div className="grid card px-4">
            <h1 className="text-base font-semibold pb-5">Total Price: ${totalPrice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
