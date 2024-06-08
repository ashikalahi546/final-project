import { Outlet } from "react-router-dom";
import Banner from "../component/banner/Banner";
import Footer from "../pages/shared/footer/Footer";
import Navber from "../pages/shared/navber/Navber";

const Main = () => {
    return (
        <div className="xl:w-[1440px] mx-auto">
          <Navber/>
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default Main;