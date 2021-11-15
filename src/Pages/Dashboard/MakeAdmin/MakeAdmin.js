import { Alert, TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);

    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://radiant-mesa-42940.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);

                }
            })

        e.preventDefault();

    }
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    style={{ width: '40%' }}
                    label="Email"
                    type="email"
                    id='email'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button style={{ backgroundColor: 'green', color: 'white' }} type="submit" varient="contained"
                > Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;