import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        "& > *": {
            marginTop: 20
        }
    }
})

const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const AddUser = () => {

    const [user, setUser] = useState(initialValues);
    const { name, username, email, phone } = user;

    const classes = useStyles();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]:e.target.value});
    }

    const addUserDetails = async() => {
        await addUser(user); 
        history.push('./all')

    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant= 'h5'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
            <Button variant='contained' onClick={() => addUserDetails()} >Add User</Button>
        </FormGroup>
    );
};

export default AddUser;