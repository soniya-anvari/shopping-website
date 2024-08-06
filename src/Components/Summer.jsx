import img1 from "../assets/product-10-a-300x366.jpg";
import img2 from "../assets/product-09-a-300x366.jpg";
import img3 from "../assets/product-08-a-300x366.jpg";
import img4 from "../assets/product-06-a-300x366.jpg";
import Tshirt from "../Components/Tshirt";
import styles from "./Summer.module.css";

function Summer() {
    return ( <
        div className = { styles.container } >
        <
        div className = { styles.texts } >
        <
        p >
        Summer Collection <
        /p> <
        h2 >
        Popular T - Shirts <
        /h2></div >
        <
        div className = { styles.tShirts } >
        <
        Tshirt img = { img1 }
        gender = { 'Men' }
        name = { 'T-Shirt Name 10' }
        price = '$33.00 – $36.00 ' / >
        <
        Tshirt img = { img2 }
        gender = { 'Men' }
        name = { 'T-Shirt Name 9' }
        price = '$33.00 – $36.00 ' / >
        <
        Tshirt img = { img3 }
        gender = { 'Women' }
        name = { 'T-Shirt Name 8' }
        price = '$33.00 – $36.00 ' / >
        <
        Tshirt img = { img4 }
        gender = { 'Women' }
        name = { 'T-Shirt Name 7' }
        price = '$33.00 – $36.00 ' / >

        <
        /div>

        <
        /div>
    )
}

export default Summer