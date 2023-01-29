import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Slide from "./Slide.jsx";

const Container = styled(Box)({
    display: "flex",
    flexDirection: "row",
});

const Image = styled("img")({
    padding: "20px",
    overflow: "hidden",
    marginRight: "5px",
});

const BoxLeft = styled(Box)(({ theme }) => ({
    width: "80%",

    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const BoxRight = styled(Box)(({ theme }) => ({
    width: "20%",
    height: "420px",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const MidSlide = ({ products, title, timer }) => {
    const adURL =
        "https://www.creatopy.com/public/images/landing/homepage/1-create/create-banner.svg";
    return (
        <Container>
            <BoxLeft>
                <Slide products={products} title={title} timer={timer} />
            </BoxLeft>
            <BoxRight>
                <Image src={adURL} />
            </BoxRight>
        </Container>
    );
};

export default MidSlide;
