import styles from "./Nav.module.css";
import logo from "../assets/logo.png";

function Nav() {

    return ( <
        div >

        <
        div className = { styles.container } >
        <
        div className = { styles.section } >
        <
        div >
        <
        p > women < /p> <
        h2 >
        Slick.Modern. < br / > Awesome. <
        /h2> <
        button > Shop Collection < /button> < /
        div >
        <
        div className = { styles.logo } >
        <
        img src = { logo }
        alt = 'logo' / >
        <
        /div>  < /
        div > <
        /
        div >


        <
        /div>
    )
}

export default Nav