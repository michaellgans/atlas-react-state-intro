// School Catalog Component

// Imports
import { TableRow } from "./components/TableRow";
import { useTableData } from "./useTableData";

export default function SchoolCatalog() {
  // Hooks
  const {
    currentPage,
    setFilter,
    handleSortingChange,
    page,
    setPage,
    hasMore,
    hasLess
  } = useTableData();

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
          {currentPage.map((course, index) => (
            <TableRow key={index} {...course} />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={!hasLess} onClick={() => setPage(page - 1)}>Previous</button>
        <button disabled={!hasMore} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
