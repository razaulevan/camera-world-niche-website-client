import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [order, setOrder] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));

    }, [])
    const handleUpdateOrder = e => {

        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    setOrder({});

                }


            })

        e.preventDefault();

    }
    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updateOrder = { status: updateStatus };
        setOrder(updateOrder);
    }
    return (
        <div>
            <h1>  Update Shiping Status</h1>
            <h5 className="mb-3"> Please type shipped/pending to change the current Status</h5>
            <form onSubmit={handleUpdateOrder}>
                <input onChange={handleStatusChange} placeholder="typle shipped/pending" type="text" />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateUser;