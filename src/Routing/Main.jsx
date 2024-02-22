import { Outlet } from "react-router-dom";
import Footer from "../HeaderFooter/Footer/Footer";
import Header from "../HeaderFooter/Header/Header";
// import Home from "../Pages/Home/Home";

const Main = () => {
    return (
        <div className='container m-auto text-[#fff] font-serif'>
            <Header />
            {/* <Home/> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;