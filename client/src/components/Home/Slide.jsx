import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled, Box, Typography, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Countdown from "react-countdown";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Image = styled("img")`
    height: 200px;
    width: auto;
`;

const TypographyMargin = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const Component = styled(Box)`
    margin-top: 10px;
    overflow: "hidden";
`;

const Timer = styled(Box)`
    color: gray;
    font-weight: 600;
    font-size: 22px;
    background: white;
    padding: 15px;
    display: flex;
    align-items: center;
`;

const Slide = ({ products, title, timer }) => {
    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <Box variant="span" style={{ fontWeight: "400", fontSize: "20px" }}>
                {hours}:{minutes}:{seconds}
            </Box>
        );
    };
    return (
        <Component>
            <Timer>
                <Box
                    style={{
                        fontWeight: "600px",
                        fontSize: "26px",
                        color: "black",
                        marginRight: "20px",
                    }}
                >
                    {title}
                </Box>
                {timer && (
                    <>
                        <AccessAlarmIcon style={{ top: "7px" }} />
                        <Countdown
                            date={Date.now() + 8.64e7}
                            renderer={renderer}
                        />
                    </>
                )}
                <Button
                    variant="contained"
                    style={{ marginLeft: "auto", fontWeight: "600" }}
                >
                    View All
                </Button>
            </Timer>
            <Divider />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                showDots={false}
                slidesToSlide={1}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {products &&
                    products.map(({ id, url, discount, title, tagline }) => (
                        <Link
                            to={`/product/${id}`}
                            key={id}
                            style={{ textDecoration: "none" }}
                        >
                            <Box
                                key={id}
                                style={{
                                    textAlign: "center",
                                    background: "white",
                                    padding: "20px",
                                    height: "300px",
                                    width: "auto",
                                    color: "black",
                                }}
                            >
                                <Image src={url} alt={title.shortTitle} />
                                <TypographyMargin style={{ fontWeight: "600" }}>
                                    {title.shortTitle}
                                </TypographyMargin>
                                <TypographyMargin style={{ color: "green" }}>
                                    {discount}
                                </TypographyMargin>
                                <TypographyMargin style={{ color: "gray" }}>
                                    {tagline}
                                </TypographyMargin>
                            </Box>
                        </Link>
                    ))}
            </Carousel>
        </Component>
    );
};

export default Slide;
