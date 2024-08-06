import styles from "./Collection.module.css";
import img1 from "../assets/collection-01.jpg";
import img2 from "../assets/collection-02.jpg";

function Collection() {
    return ( <
        div className = { styles.container } >
        <
        div >
        <
        img src = { img2 }
        / >  <
        div > <
        p > Men < /p> <
        h3 > The base collection - Ideal every day. < /h3> <
        button > Shop Now < /button></div >
        <
        /
        div >
        <
        div className = { styles.img2 } >
        <
        img src = { img1 }
        /></div >
        <
        /div>


    )
}

export default Collection