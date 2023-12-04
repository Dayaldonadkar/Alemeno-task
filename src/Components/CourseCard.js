import React from "react";

const CourseCard = ({ info }) => {
  const { instructor, name, duration, projects, id } = info;
  return (
    <div>
      <div className="border border-gray-700">
        <div className="bg-[#f8f8f8]">
          <p>By {instructor}</p>
          <h2>{name}</h2>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default CourseCard;
