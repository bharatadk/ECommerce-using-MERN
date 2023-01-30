import { styled } from "@mui/system";

import { bannerData } from "../constant/data.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")(({ theme }) => ({
    width: "100% !important",
    height: 180,
    borderRadius: "5px",

    [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        height: 200,
    },
}));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const Banner = () => {
    return (
        <Carousel
            style={{ marginTop: "0px !important" }}
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {bannerData &&
                bannerData.map((image) => (
                    <Image
                        src={image.url}
                        alt="banner"
                        id={image.id}
                        key={image.id}
                    />
                ))}
        </Carousel>
    );
};

export default Banner;
