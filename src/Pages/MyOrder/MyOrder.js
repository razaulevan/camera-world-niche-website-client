import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));

    }, [])
    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {

            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingOrders = myOrder.filter(order => order._id !== id);
                    setMyOrder(remainingOrders);
                }
            })

    }



    return (
        <div>

            <h2> Your Total Order:{myOrder.length}</h2>
            <h3>Order History</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="MY ORDER">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Mobile</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Cancel Order</TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrder.map((row) => (
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
                                <TableCell align="right">{row.status} </TableCell>

                                <TableCell align="right"> <button onClick={() => handleDelete(row._id)}>Cancel Order</button> </TableCell>



                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;