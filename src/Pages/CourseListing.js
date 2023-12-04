import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailSlice } from "../app/Slices/detailSlice";
import { Link } from "react-router-dom";
import CourseCard from "../Components/CourseCard";

const CourseListing = () => {
  const [course, setCourse] = useState("");

  console.log(course);
  const courses = useSelector((state) => state.details);
  //   console.log("deta", courses);

  return (
    <div className="flex justify-center bg-[#FAF7F2]">
      <div className="w-[90%]">
        <h1 className="text-2xl font-semibold"> Explore our courses</h1>
        <div className="py-2">
          <input
            className="border-black border  outline-none rounded-lg placeholder:text-xs pl-2 py-[1px] pb-[3px] w-[]"
            placeholder="search by Course or Instructor name"
            type="text"
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="pt-5">
          <h3 className="text-xl pb-2 font-medium">Courses</h3>

          {courses.course

            .filter((item) => {
              return course.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(course.toLowerCase()) ||
                    item.instructor
                      .toLowerCase()
                      .includes(course.toLowerCase());
            })
            .map((item) => {
              const { instructor, name, duration, projects, id } = item;
              return (
                <div className="py-5">
                  <Link to={`/details/${id}`}>
                    <CourseCard info={item} />
                  </Link>{" "}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );

  //   const dispatch = useDispatch();
  //   const { localData, error } = useSelector((state) => state);

  //   useEffect(() => {
  //     dispatch(fetchLocalData());
  //   }, [dispatch]);

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }

  //   if (!localData) {
  //     return <div>Loading...</div>;
  //   }

  //   return (
  //     <div>
  //       {localData.map((item) => {
  //         return (
  //           <div>
  //             <h1>{item.id}</h1>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
};

export default CourseListing;
