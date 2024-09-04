// TableRow Component

// Returns a TableRow Component
export function TableRow({trimester, courseNumber, courseName, semesterCredits, totalClockHours, addCourse}) {
    return (
        <tr>
            <td>{trimester}</td>
            <td>{courseNumber}</td>
            <td>{courseName}</td>
            <td>{semesterCredits}</td>
            <td>{totalClockHours}</td>
            <td>
            <button onClick={() => addCourse({courseNumber, courseName})}>Enroll</button>
            </td>
        </tr>
    );
}
