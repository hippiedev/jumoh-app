import Sidebar from "../components/Navigation/Sidebar/Sidebar";
import Courses from "../components/Courses/Courses";
import React from "react";

const StudentDashboard = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Courses />
    </React.Fragment>
  );
};

export default StudentDashboard;
