// School Catalog Component

// Imports
import { useEffect, useState } from "react";
import courseData from "../public/api/courses.json"
import { TableRow } from "./components/TableRow";

export default function SchoolCatalog() {
  // Hook
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetching data from a local JSON
    fetch("/api/courses.json")
      // Converts data into a JavaScript object
      .then((response) => response.json())
      // Updates the state with fetched data
      .then((data) => {
        setCourses(data);
      });
  }, []);

  console.log({courses});

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input type="text" placeholder="Search" />
      <table>
        {/* Table Head */}
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
        {/* Generates TableRow Components per JSON Object */}
          {courses.map((course, index) => (
            <TableRow key={index} {...course} />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
