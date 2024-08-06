import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../config/api';
import styles from "./DetailsProduct.module.css";
import Loader from "../Components/Loader";
import { sizes } from '../constant/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { DECREASE, INCREASE, ADD_TO_CARD } from '../Slice/CardSlice';
import { getCounter } from '../helper/helper';


function DetailsProduct() {
    const products = useSelector(state => state.card)
    console.log(products)
    const dispatch = useDispatch()
    const { id } = useParams();
    const [product, setProduct] = useState()
    const [size, setSize] = useState(null)
    const [add, setAdd] = useState(false)
    const clickHandler = event => {
        setSize(event.target.innerHTML.trim())
    }

    useEffect(() => {
        const fetchData = async() => {
            try {
                const data = await api.get(`/products/${id}`)
                setProduct(data.data)

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData()
    }, [id])

    if (product == undefined)
        return <Loader / >
            console.log(product);
    const addHandler = () => {
        dispatch(ADD_TO_CARD({...product, size }))
        setAdd(true)
    }
    const counter = getCounter(products.selectedItems, product.id)



    return ( < > <
        div className = { styles.container } >
        <
        div className = { styles.img } >
        <
        img src = { product.image }
        /> < /
        div > <
        div className = { styles.description } >
        <
        p > { product.category } < /p> <
        h3 > { product.title } < /h3> <
        h4 > $ { product.price } < /h4> <
        p > { product.description } < /p> <
        div className = { styles.sizeBox } > {
            sizes.map(item => ( <
                span onClick = { clickHandler }
                className = { size == item.size && styles.sizeClass }
                key = { item.id } > { item.size } < /span>
            ))
        }


        <
        /div>  <
        span onClick = {
            () => setSize(null)
        }
        className = { size !== null ? `${styles.clear} ${styles.fadeIn}` : styles.clearNull } > clear < /span> <
        hr / >
        <
        div className = { styles.addToCard } >

        <
        button className = { styles.btn }
        onClick = {
            () => dispatch(DECREASE({...product, size }))
        }
        disabled = { counter <= 1 } > - < /button> <
        button className = { styles.btn } > { counter } < /button> <
        button className = { styles.btn }
        onClick = {
            () => dispatch(INCREASE({...product, size }))
        } > + < /button>  <
        button disabled = { size == null }
        onClick = { addHandler } > {!add ? ' Add to Card ' : `Added to Card` } < /button> < /
        div >

        <
        /div>

        <
        /div> < / >
    )
}

export default DetailsProduct