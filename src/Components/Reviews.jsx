import styles from "./Reviews.module.css";
import { FaStar } from "react-icons/fa6";
import img1 from "../assets/cat-men-300x300.jpg";
import img2 from "../assets/cat-women-300x300.jpg"

function Reviews() {
    return ( <
        div className = { styles.container } >
        <
        h3 > Reviews < /h3> <
        p className = { styles.description } >
        Very good quality T - shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! < /p> <
        div className = { styles.stars } >
        <
        FaStar / >
        <
        FaStar / >
        <
        FaStar / >
        <
        FaStar / >
        <
        FaStar / >
        <
        /div> <
        p className = { styles.name } >
        Jane Oliver <
        /p> <
        div className = { styles.products } >
        <
        div >
        <
        img src = { img1 }
        />  <
        div >
        <
        p > Men < /p> <
        /div> <
        /
        div > <
        div >
        <
        img src = { img2 }
        />  <
        div >
        <
        p > Women < /p> <
        /div> <
        /
        div > <
        /div>

        <
        /div>
    )
}

export default Reviews