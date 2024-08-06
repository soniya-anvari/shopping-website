import { useSelector } from "react-redux"
import { filterData } from "../helper/helper";
import Tshirt from "../Components/Tshirt";
import styles from "./Women.module.css";
import { shortenText } from "../helper/helper";
import Loader from "../Components/Loader"

function Women() {
    const products = useSelector(state => state.product.products)
    if (products.length == 0)
        return <Loader / >
            let filteredDatas = filterData("women's clothing", products)

    return ( <
        div >
        <
        h2 > Women < /h2> <
        div className = { styles.tShirts } > {
            filteredDatas.map(product => ( <
                Tshirt key = { product.id }
                id = { product.id }
                img = { product.image }
                gender = 'women'
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