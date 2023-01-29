import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { navData } from "../constant/data";

const Component = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    margin: "55px 130px 0 130px !important",
    flexWrap: "no-wrap",
    height: "100%",

    [theme.breakpoints.down("lg")]: {
        margin: "40px !important",
    },
}));

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    return (
        <Component>
            {navData.map((temp) => (
                <Container key={temp.url}>
                    <img src={temp.url} style={{ width: 64 }} />
                    <Text>{temp.text}</Text>
                </Container>
            ))}
        </Component>
    );
};

export default NavBar;