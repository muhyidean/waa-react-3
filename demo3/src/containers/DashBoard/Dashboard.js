import Products from "../Products/Products";
import React, { useEffect, useState } from 'react';
import NewProduct from "../../components/NewProduct/NewProduct";
import NewProductHook from "../../components/NewProduct/NewProductHooks";

import axios from 'axios';
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { ThemeColorContext } from "../../context/ThemeColor";
import ReducerSample from "../../components/ReducerSample/ReducerSample";
import Header from "../Headers/Header";
import { Routes } from "react-router";
import PageRoutes from "./PageRoutes";

export default function Dashboard() {

    const [themeColorState, setThemeColorState] = useState({ color: "red" });
    const [selectedState, setSelectedState] = useState(0);


    const [productState, setProductState] = useState(
        {
            name: "",
            price: ""
        }
    )


    return (
        <React.Fragment>
            
            <div className='Header'>
                <Header />

            </div>


            <div className="Product">
                <PageRoutes />
            </div>

        </React.Fragment>

    )

}