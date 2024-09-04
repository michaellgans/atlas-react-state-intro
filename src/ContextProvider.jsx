import { createContext, useState } from "react";

export const AppContext = createContext();

export function ContextProvider({ children }) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const addCourse = (course) => {
        setEnrolledCourses([...enrolledCourses, course]);
    };

    const removeCourse = (courseNumber) => {
        setEnrolledCourses(enrolledCourses.filter((course) => course.courseNumber !== courseNumber));
    };

    return (
        <AppContext.Provider value={{ enrolledCourses, addCourse, removeCourse }}>
            {children}
        </AppContext.Provider>
    );
}
