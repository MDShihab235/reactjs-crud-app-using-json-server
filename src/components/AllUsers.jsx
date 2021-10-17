import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../Service/api';

const useStyles = makeStyles({
    table: {
        width:'90%',
        margin: '50px 0 0 50px',
    },
    thead: {
        '& > *':{
            background: "black",
            fontSize: 20,
        }
    },
    row: {
        '& > *':{
            fontSize: 20,
        }
    },

})

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async() => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead >
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell >Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map( user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' to={`/edit/${user.id}`} component={Link} style={{marginRight: 10}}>EDIT</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserData(user.id)}>DELETE</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
    );
};

export default AllUsers;