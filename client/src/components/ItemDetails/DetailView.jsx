import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail as getProductDetailAction } from "../../redux/actions/productActions";
import { Box, styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import ActionItem from "./ActionItem.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Component = styled(Box)`
    margin-top: 55px;
    background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        margin: 0,
    },
}));

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    const { id } = useParams();
    const { product, loading } = useSelector((state) => state.getProductDetail);
    const dispatch = useDispatch();
    const fassured =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    useEffect(() => {
        if (product && id != product.id) {
            dispatch(getProductDetailAction(id));
        }
    }, [dispatch, id]);

    return (
        <Component>
            <Box></Box>
            {Object.keys(product).length < 1 ? (
                <CachedIcon
                    style={{
                        marginLeft: "300px",
                        height: "400px",
                        width: "600px",
                        backgroundColor: "inherit",
                    }}
                />
            ) : (
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography
                            style={{
                                marginTop: 5,
                                color: "#878787",
                                fontSize: 14,
                            }}
                        >
                            8 Ratings & 1 Reviews
                            <span>
                                <img
                                    src={fassured}
                                    style={{ width: 77, marginLeft: 20 }}
                                />
                            </span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>
                                Rs.{product.price.cost}
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#878787" }}>
                                <strike>Rs.{product.price.mrp}</strike>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "#388E3C" }}>
                                {product.price.discount} off
                            </span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            )}
        </Component>
    );
};

export default DetailView;
