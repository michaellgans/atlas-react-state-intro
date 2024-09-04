import logo from "./assets/logo.png";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./ContextProvider.jsx";

export default function Header() {
  // Hooks
  const { enrolledCourses } = useContext(AppContext);
  const [numCourses, setNumCourses] = useState(0);

  // Count Courses
  useEffect(() => {
    setNumCourses(enrolledCourses.length);
  }, [enrolledCourses]);

  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="enrollment">Classes Enrolled: {numCourses}</div>
    </div>
  );
}
