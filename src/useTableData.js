// Custom Hook for handling the data inside a table

// Imports
import { useState, useEffect } from "react";

// Page Size
const PAGE_SIZE = 5;

export function useTableData() {
  // Hooks
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("trimester")
  const [direction, setDirection] = useState("asc");
  const [page, setPage] = useState(1);

  // Fetching data from a local JSON
  useEffect(() => {
    fetch("/api/courses.json")
      // Converts data into a JavaScript object
      .then((response) => response.json())
      // Updates the state with fetched data
      .then((data) => setCourses(data));
  }, []);

  // Filter data based on input typed
  const filteredData  = courses.filter(
    (item) => 
        item.courseNumber.toLowerCase().startsWith(filter) || 
        item.courseName.toLowerCase().startsWith(filter)
  );

  // Sort data based on header clicked
  const sortedData = filteredData.sort((a, b) => {
    if (sort === "trimester") {
      return (Number(a.trimester) - Number(b.trimester)) * (direction === "desc" ? -1 : 1);
    }
    if (sort === "courseNumber") {
      return (a.courseNumber.localeCompare(b.courseNumber)) * (direction === "desc" ? -1 : 1);
    }
    if (sort === "courseName") {
      return (a.courseName.localeCompare(b.courseName)) * (direction === "desc" ? -1 : 1);
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
  };

  // Reset current page to 1 for Filter and Sort
  useEffect(() => {
    setPage(1);
  }, [filter, sort]);

  // Pagination
  const currentPage = sortedData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasMore = sortedData.length > page * PAGE_SIZE;
  const hasLess = page > 1;

  return {
    currentPage,
    filter,
    setFilter,
    handleSortingChange,
    page,
    setPage,
    hasMore,
    hasLess
  };
}
