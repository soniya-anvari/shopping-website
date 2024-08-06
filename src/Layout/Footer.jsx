import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return ( <
        >
        <
        div className = { styles.footer } >
        <
        div >
        <
        h4 >
        Subscribe to get offers in your inbox <
        /h4> <
        p >

        Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum <
            /p> <
        ul >
        <
        li > Buy T - shirts < /li> <
        li > Women < /li> <
        li > Men < /li> <
        li > About < /li> <
        li > Contact < /li> < /
        ul >
        <
        div className = { styles.socialMedia } >
        <
        div > <
        FaFacebookF / >
        <
        /div> <
        div > <
        FaTwitter / >
        <
        /div> <
        div > <
        FaInstagram / >
        <
        /div>

        <
        /div> < /
        div > < /
        div >
        <
        div className = { styles.endPart } >
        <
        p > Copyright© 2024 T - Shirts Store | Developed by soniya < /p> < /
        div > <
        />
    )
}

export default Footer