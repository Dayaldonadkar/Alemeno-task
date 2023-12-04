import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const courses = useSelector((state) => state.details);
  console.log(courses, "asdkjlk");
  const { id } = useParams();
  //   console.log({ id });

  return (
    <div>
      {courses.course &&
        courses.course.map((item) =>
          id === item.id ? (
            ""
          ) : (
            <div>
              <h1>{item.name}</h1>
            </div>
          )
        )}
    </div>
  );
};

export default CourseDetails;
