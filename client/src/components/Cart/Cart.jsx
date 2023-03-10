import { useEffect } from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { removeFromCart } from "../../redux/actions/cartActions";
import StripeCheckout from "react-stripe-checkout"

const Component = styled(Grid)(({ theme }) => ({
    padding: "30px 135px",
    marginTop: "50px",
    display: "flex",

    [theme.breakpoints.down("sm")]: {
        padding: "15px 0",
    },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,

    [theme.breakpoints.down("sm")]: {
        marginBottom: 15,
    },
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 5px;
    width: 250px;
    height: 51px;
`;

const Cart = () => {
    const cartDetails = useSelector((state) => state.cart);
    const { cartItems } = cartDetails;
    let id;

    const dispatch = useDispatch();

    useEffect(() => {
        if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
    }, [dispatch, cartItems, id]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response
    //     }
    //     post(information);
    // }

    return (
        <>
            {cartItems.length ? (
                <Component container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header style={{ borderRadius: "5px 5px 0 0 " }}>
                            <Typography
                                style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                }}
                            >
                                My Cart ({cartItems?.length})
                            </Typography>
                        </Header>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                removeItemFromCart={removeItemFromCart}
                            />
                        ))}
                        <BottomWrapper style={{ borderRadius: "0 0 5px 5px" }}>
                            <StyledButton
                                onClick={() => buyNow()}
                                variant="contained"
                            >
                                Place Order
                            </StyledButton>
                        </BottomWrapper>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems} />
                    </Grid>
                </Component>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};

export default Cart;
