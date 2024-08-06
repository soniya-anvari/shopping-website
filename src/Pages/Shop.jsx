import { useSelector } from "react-redux"
import Tshirt from "../Components/Tshirt";
import styles from "./Women.module.css";
import { shortenText } from "../helper/helper";
import Loader from "../Components/Loader";

function Women() {
    const products = useSelector(state => state.product.products)
    console.log(products);

    if (products.length == 0)
        return <Loader / >
            return ( <
                div >
                <
                h2 > Shop < /h2> <
                div className = { styles.tShirts } > {
                    products.map(product => ( <
                        Tshirt key = { product.id }
                        id = { product.id }
                        img = { product.image }
                        gender = { product.category }
                        name = { shortenText(product.title) }
                        price = { product.price }
                        />
                    ))
                } <
                /div>

                <
                /div>
            )
}

export default Women