import CatagoryCarsoul from "./components/CatagoryCarsoul";
import DevelopmentCard from "./components/DevelopmentCard";
import Header from "./components/Header";
import Instructors from "./components/Instructors";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CatagoryCarsoul />
      <DevelopmentCard />
      <Services />
      <Instructors />
    </div>
  );
}

export default App;
