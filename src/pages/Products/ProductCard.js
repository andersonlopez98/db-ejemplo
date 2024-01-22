import * as React from 'react';
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Chip } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onDelete }) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        // Navegar a la página de edición con el estado del producto
        navigate('/productos/editar', { state: { product } });
    };

    return (
        <Card sx={{ maxWidth: 300, m: 2, display: 'inline-block' }}>
            <CardMedia
                component="img"
                image={product.image}
                title={product.description}
                alt={product.description}
                sx={{
                    height: "120",
                    p: '2px',
                    objectFit: 'cover',
                    width: '120',
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.description}
                </Typography>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            $ {product.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {product.stock > 0 ? (
                            <Chip label="Disponible" color="success" />
                        ) : (
                            <Chip label="Agotado" color="warning" />
                        )}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <IconButton onClick={() => onDelete(product.id)} color="error" component="span" >
                    <DeleteIcon />
                </IconButton>
                <IconButton color="primary" onClick={handleEditClick}>
                    <ModeEditOutlineOutlinedIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
