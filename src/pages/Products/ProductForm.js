import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"

import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

import { ref, push, update } from 'firebase/database';
import { database, storage } from '../../config/firebaseConfig';
import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';


const ProductForm = (props) => {

    const location = useLocation();

    const navigate = useNavigate();

    const [product, SetProduct] = useState({
        sku: '',
        description: '',
        price: '',
        stock: '',
        image: '',
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        SetProduct({
            ...product,
            [e.target.name]: e.target.value,
        })

    };

    const handleImage = (e) => {
        if (!e.target.files[0]) return;

        const file = e.target.files[0];
        setImage({
            type: file.type.split("/")[1],
            file
        })
    };

    const saveProduct = (item) => {
        if (item.id) {//update
            const data = { ...item };
            delete data.id;
            update(ref(database, `/products/${item.id}`), data)
                .then(() => {
                    //redireccionar a products
                    navigate("/productos");
                })
                .catch((error) => {
                    console.log(error);

                });

        } else {//create
            push(ref(database, "/products"), item)
                .then(() => {
                    //redireccionar a products
                    navigate("/productos");
                })
                .catch((error) => {
                    console.log(error);

                });
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (image) {
            const imageName = `img_${Date.now()}.${image.type}`;
            const imageRef = stRef(storage, `/products/${imageName}`);
            uploadBytes(
                stRef(storage, imageRef),
                image.file
            )
                .then(() => {
                    //guardar en la bd

                    getDownloadURL(imageRef)
                        .then((url) => {
                            saveProduct({ ...product, image: url });
                        });
                    // saveProduct({ ...product, image: url });

                },
                    (error) => {
                        console.log(error);
                    })

        } else {
            saveProduct(product);
        }
        ;

    };

    useEffect(() => {
        if (location?.state?.product) {
            SetProduct({ ...location.state.product });
        }
    }, [location]);

    return (
        <Paper
            sx={{
                p: 3
            }}
        >
            <Grid container spacing={2} component="form" onSubmit={handleSubmit}
                sx={{ mt: 3, justifyContent: 'center' }}
            >
                <Grid item container xs={12} md={6} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="sku"
                            required
                            fullWidth
                            label="SKU"
                            id="outlined-basic"
                            value={product.sku}
                            onChange={handleChange}
                            autoFocus
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="description"
                            required
                            fullWidth
                            label="Descripción"
                            id="outlined-basic"
                            value={product.description}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="stock"
                            required
                            fullWidth
                            label="Existencias"
                            id="outlined-basic"
                            value={product.stock}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="price"
                            type="number"
                            required
                            fullWidth
                            label="Precio"
                            id="outlined-basic"
                            value={product.price}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            type="file"
                            accept="image/*"
                            name="productImage"
                            id="productImage"
                            onChange={handleImage}
                            style={{ width: '1px' }}

                        />
                        <label htmlFor="productImage">
                            <Button variant="contained" component="span" style={{ marginLeft: '-1' }}>

                                Imagen de producto
                            </Button>
                        </label>
                        {image && (<span>
                            {image.file.name}
                        </span>)}
                    </Grid>

                    {product.image && (
                        <Grid item xs={12} sx={{ m: 5, textAlign: 'center' }}>
                            <img
                                src={product.image}
                                style={{ height: '120px', width: 'auto', fitObject: 'center' }}
                                alt={product.description}
                            />
                        </Grid>

                    )}

                    <Grid item xs={12} sx={{ m: 5, textAlign: 'center' }}>
                        <Button
                            type="Submit"
                            variant="contained"
                            startIcon={<SaveOutlinedIcon />}
                        >
                            Guardar Producto
                        </Button>
                    </Grid>
                </Grid>
            </Grid>


        </Paper>
    )
};

export default ProductForm;