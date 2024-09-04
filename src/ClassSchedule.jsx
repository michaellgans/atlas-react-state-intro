import { useContext } from "react";
import { AppContext } from "./ContextProvider.jsx";

export default function ClassSchedule() {
  // Hooks
  const { enrolledCourses } = useContext(AppContext);

  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Drop</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map(({courseNumber, courseName}, index) => (
            <tr key={index}>
              <td>{courseNumber}</td>
              <td>{courseName}</td>
              <td>
                <button>Drop</button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>OS1000</td>
            <td>Fundamentals of Open Source Operating Systems</td>
            <td>
              <button>Drop</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
