import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    back: {
        backgroundColor: 'red'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: 20,
        marginRight: 20
    }
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className = {classes.back} position="static">
                    <Toolbar>
                        <NavLink className = {classes.tabs} to='./' exact>Home</NavLink>
                        <NavLink className = {classes.tabs} to='all' exact>All Users</NavLink>
                        <NavLink className = {classes.tabs} to='add' exact>Add Users</NavLink>
                    </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;