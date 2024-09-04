import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import { ContextProvider } from "./ContextProvider.jsx";

export default function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </ContextProvider>
  );
}
