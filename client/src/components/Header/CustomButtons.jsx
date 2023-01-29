import { useState, useContext } from "react";
import {
    Box,
    Button,
    Typography,
    styled,
    IconButton,
    Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Profile from "./Profile";
import LoginDialog from "../Login/LoginDialog.jsx";
import { LoginContext } from "../../context/ContextProvider";
import "./CustomButtons.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
    padding: "15px",
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
}));
const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: "8px 10px",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
}));

const LoginButton = styled(Button)`
    color: #1976d2;
    background: #ffffff;
    height: 32px;
    font-weight: 600;
    box-shadow: none;
    padding: 8px 40px;
    margin-top: 5px;
    margin-left: 2px;
    margin-right: auto;
`;

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    const { cartItems } = useSelector((state) => state.cart);
    const openDialog = () => {
        setOpen(true);
    };

    return (
        <Wrapper className="myClass">
            {account ? (
                <Profile account={account} setAccount={setAccount} />
            ) : (
                <LoginButton variant="contained" onClick={() => openDialog()}>
                    Login
                </LoginButton>
            )}
            <Container>
                <Typography
                    style={{
                        marginTop: "3px",
                        width: "135px",
                    }}
                >
                    Become a Seller
                </Typography>
                {/* <Typography style={{ marginTop: "3px" }}>More</Typography> */}
                <Link
                    to="/cart"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <Badge
                        badgeContent={cartItems.length}
                        color="warning"
                        style={{ marginLeft: "100px" }}
                    >
                        <ShoppingCartIcon style={{ fontSize: "20px" }} />

                        <Typography
                            style={{
                                fontSize: "14px",
                            }}
                        >
                            Cart
                        </Typography>
                    </Badge>
                </Link>
            </Container>

            <LoginDialog
                open={open}
                setOpen={setOpen}
                setAccount={setAccount}
            />
        </Wrapper>
    );
};

export default CustomButtons;
