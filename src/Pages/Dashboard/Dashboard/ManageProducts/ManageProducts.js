import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [cameraProduct, setCameraProduct] = useState([])
    useEffect(() => {
        fetch('https://radiant-mesa-42940.herokuapp.com/cameras')
            .then(res => res.json())
            .then(data => setCameraProduct(data))

    }, []);
    const handleDelete = id => {
        const url = `https://radiant-mesa-42940.herokuapp.com/cameras/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted successfully');
                    const remaining = cameraProduct.filter(cp => cp._id !== id);
                    setCameraProduct(remaining);
                }
            })

    }
    return (
        <div>
            <h1>manage paroducts</h1>
            {
                cameraProduct.map(cp => <div key={cp._id}>
                    <h3>{cp.name}</h3>
                    <button onClick={() => handleDelete(cp._id)}>Delete</button>

                </div>)
            }

        </div>
    );
};

export default ManageProducts;