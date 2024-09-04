// TableRow Component

// Returns a TableRow Component
export function TableRow({trimester, courseNumber, courseName, semesterCredits, totalClockHours}) {
    return (
        <tr>
            <td>{trimester}</td>
            <td>{courseNumber}</td>
            <td>{courseName}</td>
            <td>{semesterCredits}</td>
            <td>{totalClockHours}</td>
            <td>
            <button>Enroll</button>
            </td>
        </tr>
    );
}
