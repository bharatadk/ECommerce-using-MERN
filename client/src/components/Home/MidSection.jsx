import { Container, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { imageURL } from "../constant/data";

const CovidImage = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        height: 200,
    },
}));

const MidSection = () => {
    const covidUrl =
        "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

    return (
        <Box
            style={{
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                marginTop: "10px",
            }}
        >
            <Grid container>
                {imageURL.map((image) => (
                    <Grid
                        item={true}
                        lg={4}
                        md={12}
                        sm={12}
                        xs={12}
                        key={image}
                    >
                        <img
                            src={image}
                            alt="ads"
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <CovidImage
                src={covidUrl}
                alt="covid"
                style={{ borderRadius: "10px", width: "100%" }}
            />
        </Box>
    );
};
export default MidSection;
