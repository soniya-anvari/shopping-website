import { IoMdClose } from "react-icons/io";
import styles from "./Modal.module.css"
import { useDispatch, useSelector } from "react-redux";
import { CHECKOUT, DECREASE, INCREASE, REMOVE_ITEM } from "../Slice/CardSlice";
const Modal = ({ isModalOpen, onClose }) => {
    const cardProducts = useSelector(state => state.card)
    const dispatch = useDispatch()
    if (isModalOpen !== true) {
        return null;
    }
    return ( < div className = { styles.container } > <
        section className = { styles.modal } >
        <
        article className = { styles.modalContent } >
        <
        div className = { styles.exitIcon } >
        <
        IoMdClose onClick = { onClose }
        /> < /
        div > <
        main className = "modal-mainContents" > {
            cardProducts.counter == 0 ?
            <
            p className = { styles.empty } >

            No products in the cart. <
            /p>: 
            cardProducts.selectedItems.map(product => ( < >
                <
                p className = { styles.remove }
                onClick = {
                    () => dispatch(REMOVE_ITEM(product))
                } > X < /p> <
                h5 className = { styles.modalTitle } > { product.title } < /h5>  <
                div className = { styles.modalImage } >
                <
                img src = { product.image }
                alt = "image" / >
                <
                /div> <
                p className = { styles.modalText } > size: { product.size } < /p> <
                p className = { styles.price } > price: {
                    (product.price * product.quantity).toFixed(2)
                } < /p> <
                div className = { styles.modalButton } >

                <
                div className = { styles.addToCard } >

                <
                button className = { styles.btn }
                onClick = {
                    () => dispatch(DECREASE(product))
                }
                disabled = { product.quantity <= 1 } > - < /button> <
                button className = { styles.btn } > { product.quantity } < /button> <
                button className = { styles.btn }
                onClick = {
                    () => dispatch(INCREASE(product))
                } > + < /button>   < /
                div > <
                /
                div >
                <
                hr / >
                <
                />
            ))

        }

        {
            cardProducts.counter > 0 && <
                div className = { styles.checkout } >
                <
                div >
                <
                p > Subtotal: < /p> <
            p > { cardProducts.total.toFixed(2) } < /p> < /
            div >
                <
                button onClick = {
                    () => dispatch(CHECKOUT()) } > Checkout < /button> < /
            div >
        }

        <
        /main> < /
        article > <
        /section> </div >
    );
};

export default Modal;