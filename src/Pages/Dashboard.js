import React, { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [progress, setProgress] = useState(false);

  const enroll = useSelector((state) => state.enrolledStudents);
  console.log(enroll, enroll);
  return (
    <div className="flex justify-center bg-[#FDF7E4] py-10">
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[55%] space-y-14 ">
        {enroll.studentsenroll.map((item) => {
          const { name, email, coursename } = item;

          return (
            <div className="space-y-5 border bg-white rounded-xl shadow-xl px-5 py-5">
              <h6>
                <span className="text-xl">Name </span>
                <br />
                <span className="text-gray-500">{name}</span>
              </h6>

              <h6>
                <span className="text-xl">Email</span>
                <br />
                <span className="text-gray-500">{email}</span>
              </h6>
              <div className="space-y-3">
                <h6 className="text-xl font-bold">Courses enrolled:</h6>
                {coursename.map((course, index) => {
                  return (
                    <div className="space-y-1 pb-5" key={index}>
                      <p>
                        <span>{index + 1}) </span>
                        <span className="text-xl">Course Name</span>
                        <br />
                        <span className="pl-2 text-gray-500">
                          {course.name}
                        </span>
                      </p>
                      <div>
                        <span className="text-xl">Instructor Name</span>
                        <br />
                        <span className="pl-2 text-gray-500">
                          {course.instructorname}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <label for="points">Progress Bar</label>
                        <div>
                          <input
                            className="w-[50%]"
                            type="range"
                            id="points"
                            name="points"
                            min="0"
                            value={course.progress}
                            max="100"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => setProgress(true)}
                        className="bg-green-500 cursor-pointer text-white px-2 py-1 my-5 rounded-lg"
                      >
                        {!progress
                          ? "Mark Course as Complete"
                          : "Course Completed"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
