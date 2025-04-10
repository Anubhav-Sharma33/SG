import { Outlet } from "react-router-dom";
import Navbar from "../UI/GeneralSections/navbar";
import Footer from "../UI/GeneralSections/footer";

export default function Root(){
    return(
        <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}