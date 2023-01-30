import React, { useEffect } from "react";

import { getProducts } from "../redux/actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";

import { Box, styled } from "@mui/material";
import NavBar from "./Home/NavBar.jsx";
import Banner from "./Home/Banner.jsx";
import Slide from "./Home/Slide.jsx";
import MidSlide from "./Home/MidSlide.jsx";
import MidSection from "./Home/MidSection.jsx";

const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`;

const Home = () => {
    const dispatch = useDispatch();
    const getProductsSelector = useSelector((state) => state.getProducts);
    const { products, loading } = getProductsSelector;
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <Component style={{ marginTop: "10px" }}>
                <Banner />
                <MidSlide
                    products={products}
                    title={"Deal of the Day"}
                    timer={true}
                />
                <MidSection />
                <Slide products={products} title={"Suggested Items"} />
                <Slide products={products} title={"Top Selection"} />
            </Component>
        </>
    );
};

export default Home;
