import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../Components/Modal";
import { useState } from "react";

function Navbar() {
    const products = useSelector(state => state.card)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true);

    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return ( <
        div className = { styles.container } >
        <
        div className = { styles.navbar } >

        <
        ul >
        <
        li >
        <
        Link to = '/' > Home < /Link> < /
        li > <
        li > < Link to = '/shop' > By - tshirts < /Link>< /li > <
        li > < Link to = '/product-category/women' > women < /Link> < /li > <
        li > < Link to = '/product-category/men' > men < /Link> < /li > <
        li > < Link to = '/about' > about < /Link> < /li > <
        li > < Link to = '/contact' > Contact < /Link> < /li > < /
        ul > <
        div >
        <
        FaRegHeart / >
        <
        CiShoppingBasket onClick = { openModal }
        / >  <
        Modal isModalOpen = { isModalOpen }

        onClose = { closeModal }
        /> <
        div className = { styles.counter } > <
        span > { products.counter } < /span></div >

        <
        /div> < /
        div >
        <
        /div>
    )
}

export default Navbar