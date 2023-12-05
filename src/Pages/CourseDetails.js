import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsCard from "../Components/DetailsCard";

const CourseDetails = () => {
  const courses = useSelector((state) => state.details);
  console.log(courses, "asdkjlk");
  const { id } = useParams();
  //   console.log({ id });

  return (
    <div>
      <div>
        {courses.course &&
          courses.course.map((item) => {
            console.log(id, item.id);
            console.log(typeof item.id, typeof id);
            console.log(id === item.id);
            return parseInt(id) === item.id ? (
              <div className="bg-[#FDF7E4]">
                <h1>
                  <DetailsCard info={item} />
                </h1>
              </div>
            ) : (
              ""
            );
          })}
      </div>
    </div>
  );
};

export default CourseDetails;
