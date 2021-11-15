import React, { useEffect, useState } from 'react';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://radiant-mesa-42940.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])
    const handleDelete = id => {
        fetch(`https://radiant-mesa-42940.herokuapp.com/orders/${id}`, {

            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                }
            })

    }
    const handleUpdate = id => {

    };

    return (
        <div>

            <h2> Total Order:{orders.length}</h2>
            <h3>Order History</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="MY ORDER">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Mobile</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Cancel Order</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right"> Update Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.place}</TableCell>
                                <TableCell align="right">{row.phone} </TableCell>
                                <TableCell align="right">{row.email} </TableCell>
                                <TableCell align="right"> <button onClick={() => handleDelete(row._id)}>Cancel Order</button> </TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    <Link to={`/orders/update/${row._id}`} ><button onClick={() => handleUpdate(row._id)}>Update Status</button> </Link></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;