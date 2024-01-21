import React, { useState } from "react";

import { Button, Grid, Paper, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const CustomerForm = () => {

    const [customer, SetCustomer] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',

    });

    const handleChange = (e) => {
        SetCustomer({
            ...customer,
            [e.targer.name]: e.targer.value,
        })

        console.log("Guardar");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Guardar");
    };

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
                            name="name"
                            required
                            fullWidth
                            label="Nombre"
                            id="outlined-basic"
                            value={customer.name}
                            onChange={handleChange}
                            autoFocus
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="lastname"
                            required
                            fullWidth
                            label="Apellidos"
                            id="outlined-basic"
                            value={customer.lastname}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            type="email"
                            required
                            fullWidth
                            label="Email"
                            id="outlined-basic"
                            value={customer.lastname}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="phone"
                            type="number"
                            required
                            fullWidth
                            label="Teléfono"
                            id="outlined-basic"
                            value={customer.phone}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="company"
                            required
                            fullWidth
                            label="empresa"
                            id="outlined-basic"
                            value={customer.company}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ m: 5, textAlign: 'center' }}>
                        <Button
                            type="Submit"
                            variant="container"
                            startIcon={<SaveOutlinedIcon />}
                        >
                            Guardar Cliente
                        </Button>
                    </Grid>
                </Grid>
            </Grid>


        </Paper>
    )

};

export default CustomerForm;