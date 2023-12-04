import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const CourseCard = ({ info }) => {
  const {
    instructor,
    name,
    duration,
    projects,
    id,
    thumbnail,
    students,
    rating,
  } = info;
  return (
    <div className="border border-gray-700 bg-[#f8f8f8]  rounded-xl hover:border-2 hover:border-gray-400">
      <div className="px-5 py-2 flex items-center justify-between">
        <div className="space-y-5 py-8">
          <h2 className="text-xl">{name}</h2>
          <p className="text-gray-500">By {instructor}</p>
        </div>
        <img className="w-10" src={thumbnail} alt={`${name} logo`} />
      </div>
      <div className="bg-white pl-5 py-5 rounded-b-xl text-sm">
        <div className="flex space-x-14">
          <div className="flex space-x-1 items-center">
            <AccessTimeIcon fontSize="small" />
            <p>{duration}</p>
          </div>
          <div className="flex items-center space-x-1">
            <WorkOutlineIcon fontSize="small" />
            <p>{projects}</p>
          </div>
        </div>

        <div className="flex items-center pt-3 space-x-2 pl-3">
          <div className="space-x-1 flex items-center">
            <span> ⭐️ </span>
            <span>{rating}</span>
          </div>
          <span> ({students.length}K+ students)</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
