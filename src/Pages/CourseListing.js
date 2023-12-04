import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocalData } from "../Redux/actions";
import { detailSlice } from "../app/Slices/detailSlice";
import { Link } from "react-router-dom";

const CourseListing = () => {
  const [course, setCourse] = useState("");
  console.log(course);
  const courses = useSelector((state) => state.details);
  //   console.log("deta", courses);

  return (
    <div>
      <div>
        <input
          className="border-black border  outline-none"
          placeholder="search by Course Name"
          type="text"
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      {courses.course.map((item) => {
        const { instructor, name, duration, projects, id } = item;
        return (
          <Link to={`/details/${id}`}>
            <div>
              <p>By {instructor}</p>
              <h2>{name}</h2>
              <p>{duration}</p>
            </div>
          </Link>
        );
      })}
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
