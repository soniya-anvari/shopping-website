import styles from "./Tshirt.module.css";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Tshirt({ img, gender, name, price, id }) {


    return ( <
        div className = { styles.tshirt } >
        <
        img src = { img }
        /> <
        p > { gender } < /p> <
        h3 > { name } <
        /h3> <
        p > { price }
        $ < /p> <
        div className = { styles.basket } >
        <
        Link to = { `/product/${id}` } >
        <
        CiShoppingBasket / >
        <
        /Link>

        <
        FaRegHeart / >
        <
        /div>  < /
        div >
    )
}
export default Tshirt