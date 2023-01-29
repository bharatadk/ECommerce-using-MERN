import { InputBase, List, ListItem, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
    background: white;
    width: 38%;
    height: 50%;
    padding: 2px;
    border-radius: 4px;
    margin-left: 10px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`;

const SearchIconWrapper = styled(Box)`
    color: #1976d2;
    padding: 2px;
`;

const ListWrapper = styled(List)`
    position: absolute;
    color: #000;
    background: #ffffff;
    margin-top: 36px;
`;

const Search = () => {
    const [text, setText] = useState("");
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products } = getProducts;

    const getText = (e) => {
        setText(e.target.value);
        setOpen(false);
    };
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                value={text}
                onChange={getText}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {text && (
                <ListWrapper hidden={open}>
                    {products
                        .filter((product) =>
                            product.title.longTitle
                                .toLowerCase()
                                .includes(text.toLowerCase())
                        )
                        .map((product) => (
                            <ListItem key={product.id}>
                                <Link
                                    to={`/product/${product.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                    onClick={() => setOpen(true)}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))}
                </ListWrapper>
            )}
        </SearchContainer>
    );
};

export default Search;
