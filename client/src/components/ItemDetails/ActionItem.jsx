import { Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";

const Image = styled("img")({
    padding: "15px",
    border: "1px solid #f0f0f0",
    width: "85%",
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #fff;
`;

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
        padding: "20px 40px",
    },
}));

const ActionItem = ({ product }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const addItemToCart = () => {
        dispatch(addToCart(id));
    };
    return (
        <LeftContainer>
            <Image src={product.detailUrl} alt="sth" />
            <StyledButton
                onClick={() => addItemToCart()}
                style={{ marginRight: 10, background: "#ff9f00" }}
                variant="contained"
            >
                <Cart />
                Add to Cart
            </StyledButton>

            <StyledButton
                // onClick={() => buyNow()}
                style={{ background: "#fb641b" }}
                variant="contained"
            >
                <Flash /> Buy Now
            </StyledButton>
        </LeftContainer>
    );
};

export default ActionItem;
