import React, { useEffect, useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { Link } from 'react-router-dom';

import { onValue, ref, remove } from "firebase/database";
import { database } from '../../config/firebaseConfig';

import ProductCard from "./ProductCard";

const Products = () => {

    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        remove(ref(database, `/products/${id}`))
        .then(()=>{
            alert('Producto eliminado');
        })
    }

    const renderProducts = () => {
        return products.map((item) => (
            <ProductCard key={item.id} product={item} onDelete={handleDelete} />
        ))
    };
  
    useEffect(() => {
        onValue(
            ref(database, "products/"),
            (snapshot) => {
                const productsList = [];

                snapshot.forEach(item => {
                    const ProductItem = {
                        id: item.key,
                        ...item.val(),
                    };

                    productsList.push(ProductItem);

                });
                setProducts(productsList);

            },
            (error) => {
                console.error(error);
            }
        )
    }, []);

    return (
        <Paper
            sx={{
                p: 3,
                display: 'flex'
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <h3 sx={{ m: 0 }} >Productos</h3>

                </Grid>
                <Grid item xs={2}>
                    <Button color="success" variant="outlined" LinkComponent={Link} to="/productos/agregar" startIcon={<AddOutlinedIcon />}>
                        Agregar
                    </Button>

                </Grid>
                <Grid item xs={12} sx={{ flexWrap: 'wrap',  justifyContent: 'center' }}>
                    {renderProducts()}

                </Grid>
            </Grid>

        </Paper>
    );

};

export default Products;

