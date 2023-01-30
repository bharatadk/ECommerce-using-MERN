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
    padding: "0px",
    height: "55px",
    display: "flex",

    [theme.breakpoints.down("md")]: {
        display: "block",
        paddingBottom: "200px",
    },
}));
const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
    width: "450px",
    justifyContent: "space-between",

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
        <Wrapper>
            <Container>
                {account ? (
                    <Profile account={account} setAccount={setAccount} />
                ) : (
                    <Box>
                        <LoginButton
                            variant="contained"
                            onClick={() => openDialog()}
                        >
                            Login
                        </LoginButton>
                    </Box>
                )}

                <Box>
                    <Typography
                        style={{
                            marginTop: "3px",
                            width: "135px",
                            fontWeight: "600",
                            fontSize: "16px",
                        }}
                    >
                        Become a Seller
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        style={{
                            fontSize: "16px",
                            fontWeight: "600",
                        }}
                    >
                        More
                    </Typography>
                </Box>
                <Box
                    style={{
                        height: "100%",
                        padding: "25px 20px 0 0 ",
                    }}
                >
                    <Link
                        to="/cart"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Badge badgeContent={cartItems.length} color="warning">
                            <ShoppingCartIcon />

                            <Typography
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                }}
                            >
                                Cart
                            </Typography>
                        </Badge>
                    </Link>
                </Box>
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
