import CatagoryCarsoul from "./components/CatagoryCarsoul";
import Company from "./components/Company";
import DevelopmentCard from "./components/DevelopmentCard";
import Header from "./components/Header";
import Instructors from "./components/Instructors";
import MainFooter from "./components/MainFooter";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
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
      <Company />
      <Reviews />
      <MainFooter />
    </div>
  );
}

export default App;
