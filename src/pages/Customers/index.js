import React, { useEffect, useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';

import { DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import { onValue, ref } from "firebase/database";
import { database } from '../../config/firebaseConfig';

const columns = [
    {
        field: 'fullName',
        headerName: 'Nombre',
        sortable: false,
        width: 250,
        valueGetter: (params) =>
        `${params.row.name || ''} ${params.row.lastname || ''}`,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 220,
      },
      {
        field: 'phone',
        headerName: 'Teléfono',
        width: 220,
      },
      {
        field: 'company',
        headerName: 'Empresa',
        width: 220,
      },
];


const Customers = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        onValue(
            ref(database, "customers/"),
            (snapshot) => {
                const customersList = [];

                snapshot.forEach(item => {
                    const customerItem = {
                        id: item.key,
                        ...item.val(),
                    };

                    customersList.push(customerItem);

                });

                setCustomers(customersList);

            },
            (error) => {
                console.error(error);
            }
        )
    }, []);

    return (
        <Paper
            sx={{
                p: 3
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <h3 sx={{ m: 0 }} >Clientes</h3>

                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" LinkComponent={Link} to="/clientes/agregar" startIcon={<AddOutlinedIcon />}>
                        Agregar
                    </Button>

                </Grid>
                <Grid item xs={12}>

                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={customers}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            disableRowSelectionOnClick
                        />
                    </Box>

                </Grid>
            </Grid>

        </Paper>
    );
}

export default Customers;
