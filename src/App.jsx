import Mainpage from "./Pages/Mainpage";
import Layout from "./Layout/Layout"
import { useDispatch } from "react-redux";
import { fetchPosts } from "./Slice/ProductsSlice";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import DetailsProduct from "./Pages/DetailsProduct";
import NotFound from "./Pages/NotFound";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return ( <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < Mainpage / > }
        /> <
        Route path = "/product-category/women"
        element = { < Women / > }
        /> <
        Route path = "/product-category/men"
        element = { < Men / > }
        /> <
        Route path = "/product/:id"
        element = { < DetailsProduct / > }
        / > <
        Route path = "/*"
        element = { < NotFound / > }
        />  <
        Route path = '/shop'
        element = { < Shop / > }
        />  <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = '/contact'
        element = { < Contact / > }
        /> <
        /
        Routes >
        <
        /Layout>
    )
}

export default App