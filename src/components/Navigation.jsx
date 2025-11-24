import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category';
// No import needed - using CDN

const Navigation = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ margin: 2 }}>
                My Notes App
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="inherit bg-primary" startIcon={<HomeIcon />} href="/">
                    All Notes
                </Button>
                <Button color="inherit bg-primary" startIcon={<AddIcon />} href="/add-note">
                    Add Notes
                </Button>
                <Button color="inherit bg-primary" startIcon={<CategoryIcon />} href="/category">
                    Categories
                </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;