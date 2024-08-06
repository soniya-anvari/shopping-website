import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
    return ( <
        div >
        <
        Navbar / >
        <
        p > { children } < /p> <
        Footer / >
        <
        /div>


    )
}

//https://websitedemos.net/t-shirts-store-04/
export default Layout