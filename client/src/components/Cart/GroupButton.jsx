import React, { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { plusMinusCartItem } from "../../redux/actions/cartActions";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({ id }) => {
    const dispatch = useDispatch();
    const cartDetails = useSelector((state) => state.cart);
    const { cartItems } = cartDetails;

    const [counter, setCounter] = useState(
        cartItems.filter((item) => item.id == id)[0].quantity
    );

    const handleIncrement = () => {
        setCounter((counter) => counter + 1);
    };

    const handleDecrement = () => {
        setCounter((counter) => counter - 1);
    };

    useEffect(() => {
        dispatch(plusMinusCartItem(id, counter));
    }, [counter]);

    return (
        <Component>
            <StyledButton
                onClick={() => handleDecrement()}
                disabled={counter == 0}
            >
                -
            </StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
};

export default GroupedButton;
