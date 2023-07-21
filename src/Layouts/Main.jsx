
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#E3E6E6]">
      <Navbar />
      <div className="max-w-screen-xl mx-auto md:min-h-[calc(100vh-500px)]">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
