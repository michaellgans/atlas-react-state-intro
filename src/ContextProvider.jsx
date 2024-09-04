import { createContext, useState } from "react";

export const AppContext = createContext();

export function ContextProvider({ children }) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const addCourse = (course) => {
        setEnrolledCourses([...enrolledCourses, course]);
    };

    return (
        <AppContext.Provider value={{ enrolledCourses, addCourse }}>
            {children}
        </AppContext.Provider>
    );
}
