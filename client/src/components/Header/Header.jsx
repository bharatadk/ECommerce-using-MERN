import {
    Toolbar,
    styled,
    AppBar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
    height: 55px;
`;

const StyledBox = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    color: "white",
    [theme.breakpoints.down("md")]: {
        display: "block",
        marginLeft: "200px",
    },
}));
const BoxForCustom = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const logoURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

    const list = () => (
        <Box style={{ width: 250 }}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: "55px" }}>
                <StyledBox>
                    <Link to={"/"}>
                        <img
                            src={logoURL}
                            alt="logo"
                            style={{ width: "75px" }}
                        />
                    </Link>
                    <Box>
                        <SubHeading>
                            Explore
                            <Box component="span" style={{ color: "yellow" }}>
                                Plus
                            </Box>
                        </SubHeading>
                    </Box>
                </StyledBox>
                <Search />
                <BoxForCustom style={{ margin: "0 10px 0 0" }}>
                    <CustomButtons />
                </BoxForCustom>
                <CustomIconButton onClick={() => setOpen(true)}>
                    <MenuIcon />
                </CustomIconButton>
                <Drawer
                    open={open}
                    anchor="right"
                    onClose={() => setOpen(false)}
                >
                    {list()}
                </Drawer>
            </Toolbar>
        </StyledHeader>
    );
};
export default Header;
