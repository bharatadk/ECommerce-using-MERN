import { useState, useEffect } from "react";

import { Box, Typography, styled } from "@mui/material";

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderbottom: 1px solid #f0f0f0;
    border-radius: 5px 5px 0 0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px;
    color: green;
`;

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let price = 0,
            discount = 0;
        cartItems.map((item) => {
            price += item.price.mrp;
            discount += item.price.mrp - item.price.cost;
            console.log("price");
            if (item.quantity > 1) {
                price = price * item.quantity;
            }
        });
        setPrice(price);
        setDiscount(discount);
    };

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>
                    Price (
                    {cartItems.reduce(
                        (totalitems, item) => totalitems + item.quantity,
                        0
                    )}
                    &nbsp; items)
                    <Price component="span">Rs.{price}</Price>
                </Typography>
                <Typography>
                    Discount
                    <Price component="span">-Rs.{discount}</Price>
                </Typography>
                <Typography>
                    Delivery Charges
                    <Price component="span">Rs.100</Price>
                </Typography>
                <TotalAmount>
                    Total Amount
                    <Price>Rs.{price - discount + 100}</Price>
                </TotalAmount>
                <Discount>
                    You will save Rs.{discount - 100} on this order
                </Discount>
            </Container>
        </Box>
    );
};

export default TotalView;
