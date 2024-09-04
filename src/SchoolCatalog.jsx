// School Catalog Component

// Imports
import { useEffect, useState } from "react";
import { TableRow } from "./components/TableRow";

export default function SchoolCatalog() {
  // Hooks
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("trimester")
  const [direction, setDirection] = useState("asc");

  // Fetching data from a local JSON
  useEffect(() => {
    fetch("/api/courses.json")
      // Converts data into a JavaScript object
      .then((response) => response.json())
      // Updates the state with fetched data
      .then((data) => {
        setCourses(data);
      });
  }, []);

  // Filter data based on input typed
  const filteredData  = courses.filter((item) => item.courseNumber.toLowerCase().startsWith(filter) || item.courseName.toLowerCase().startsWith(filter));

  // Sort data based on header clicked
  const sortedData = filteredData.sort((a, b) => {
    if (sort === "trimester") {
      return (Number(a.trimester) - Number(b.trimester)) * (direction === "desc" ? -1 : 1);
    }
    if (sort === "courseNumber") {
      return (a[sort].localeCompare(b.courseNumber)) * (direction === "desc" ? -1 : 1);
    }
    if (sort === "courseName") {
      return (a[sort].localeCompare(b.courseName)) * (direction === "desc" ? -1 : 1);
    }
    if (sort === "semesterCredits") {
      return (Number(a.semesterCredits) - Number(b.semesterCredits)) * (direction === "desc" ? -1 : 1);
    }
    if (sort === "totalClockHours") {
      return (Number(a.totalClockHours) - Number(b.totalClockHours)) * (direction === "desc" ? -1 : 1);
    }
    return 0;
  });

  // Sort direction
  const handleSortingChange = (field) => {
    const sortOrder = sort === field && direction === "asc" ? "desc" : "asc";
    setSort(field);
    setDirection(sortOrder);
  }

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input 
        type="text" 
        placeholder="Search Course Number or Name"
        onChange={(event) => setFilter(event.target.value.toLowerCase())}
      />
      <table>
        {/* Table Head */}
        <thead>
          <tr>
            <th onClick={() => handleSortingChange("trimester")}>Trimester</th>
            <th onClick={() => handleSortingChange("courseNumber")}>Course Number</th>
            <th onClick={() => handleSortingChange("courseName")}>Courses Name</th>
            <th onClick={() => handleSortingChange("semesterCredits")}>Semester Credits</th>
            <th onClick={() => handleSortingChange("totalClockHours")}>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
        {/* Generates TableRow Components per JSON Object */}
          {sortedData.map((course, index) => (
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
