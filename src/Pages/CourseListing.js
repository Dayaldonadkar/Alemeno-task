import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocalData } from "../Redux/actions";
import { detailSlice } from "../app/Slices/detailSlice";
import { Link } from "react-router-dom";
import CourseCard from "../Components/CourseCard";

const CourseListing = () => {
  const [course, setCourse] = useState("");
  const [instructorSearch, setInstructorSearch] = useState("");
  console.log(course);
  const courses = useSelector((state) => state.details);
  //   console.log("deta", courses);

  return (
    <div className="flex justify-center bg-[#FAF7F2]">
      <div className="w-[90%]">
        <h1 className="text-xl font-semibold"> Explore our courses</h1>
        <div className="py-2">
          <input
            className="border-black border  outline-none rounded-lg placeholder:text-sm pl-2 py-[1px] pb-[3px]"
            placeholder="search by Course Name"
            type="text"
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">Courses</h3>

          {courses.course

            .filter((item) => {
              return course.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(course.toLowerCase()) ||
                    item.instructor.toLowerCase().includes(course);
            })
            .map((item) => {
              const { instructor, name, duration, projects, id } = item;
              return (
                <div className="py-2">
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
