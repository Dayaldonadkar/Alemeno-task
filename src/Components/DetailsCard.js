import React, { useState } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SyllabusCard from "./SyllabusCard";

const DetailsCard = ({ info }) => {
  //   console.log(info);
  const [showSyllabus, setShowSyllabus] = useState(false);
  const {
    name,
    instructor,
    description,
    rating,
    duration,
    projects,
    enrollmentStatus,
    schedule,
    location,
    prerequisites,
    syllabus,
  } = info;
  console.log(name, "name");
  return (
    <div className="flex justify-center py-10">
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[55%] space-y-5 border px-10 bg-[#FFF6F6]  py-10 rounded-xl shadow-lg">
        <div>
          <h6 className="text-sm text-[#3482FF]">
            Instructed by
            <span className="font-medium text-lg capitalize">
              {" "}
              {instructor}
            </span>
          </h6>
          <div className="space-y-1">
            <h3 className="text-2xl font-medium">{name}</h3>
            <p className="text-lg leading-none text-gray-500">{description}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="leading-tight">
            <span className="text-lg font-medium leading-tight">
              Enrollment Status
            </span>
            <br /> {enrollmentStatus}
          </p>
          <p>
            <span className="text-lg font-medium leading-tight">Schedule</span>
            <br /> <span className="text-gray-800">{schedule}</span>
          </p>
          <p>
            <span className="text-lg font-medium leading-tight">Location </span>{" "}
            <br /> <span>{location}</span>
          </p>
          <p>
            <span className="text-lg font-medium leading-tight">
              Prereuisties
            </span>
            <br />
            <span>{prerequisites}</span>
          </p>
          <p>
            <span className="text-lg font-medium leading-tight">Duration</span>
            <br />
            <span>{duration}</span>
          </p>
          <p>
            <span className="text-lg font-medium leading-tight">Projects</span>
            <br />
            <span>{projects}</span>
          </p>

          <p>
            <span className="text-lg font-medium leading-tight">Rating</span>
            <br />
            <span className="text-sm text-gray-500">⭐️ </span>
            {rating}
          </p>
        </div>

        <div className="">
          <h3
            onClick={() => setShowSyllabus(!showSyllabus)}
            className="text-2xl cursor-pointer"
          >
            Syllabus
            <span>
              {showSyllabus ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </span>
          </h3>
          {showSyllabus && (
            <div className="space-y-3">
              {syllabus.map((item) => {
                return <SyllabusCard item={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
