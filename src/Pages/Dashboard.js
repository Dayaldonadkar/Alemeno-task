import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const enroll = useSelector((state) => state.enrolledStudents);
  console.log(enroll, enroll);
  return <div>Dashboard</div>;
};

export default Dashboard;
