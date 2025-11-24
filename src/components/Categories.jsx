import { useState, useEffect } from "react";
import {Card, CardContent, Typography, TextField, Button, Box, IconButton,} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    
    useEffect(() => {
        setCategories(JSON.parse(localStorage.getItem("categories")));
    }, []);

    const handleAdd = () => {
        const trimmed = newCategory.trim();
        if (!trimmed || categories.includes(trimmed)) return;
        const updated = [...categories, trimmed];
        setCategories(updated);
        localStorage.setItem("categories", JSON.stringify(updated));
        setNewCategory("");
    };

    const handleDelete = (cat) => {
        const updated = categories.filter((c) => c !== cat);
        setCategories(updated);
        localStorage.setItem("categories", JSON.stringify(updated));
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 5 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Manage Categories
            </Typography>

            <Card sx={{ p: 2, boxShadow: 3 }}>
                <CardContent>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Add New Category
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                    <TextField
                    fullWidth
                    placeholder="Category Name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <Button
                    variant="contained"
                    onClick={handleAdd}
                    >
                    ADD
                    </Button>
                </Box>

                <Typography sx={{ fontWeight: 600, mb: 2 }}>
                    Existing Categories ({categories.length})
                </Typography>

                {categories.map((cat, i) => (
                    <Box
                    key={i}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 1.5,
                    }}
                    >
                    <Typography>{cat}</Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton color="primary">
                        <EditIcon />
                        </IconButton>

                        <IconButton
                        color="error"
                        onClick={() => handleDelete(cat)}
                        >
                        <DeleteIcon />
                        </IconButton>
                    </Box>
                    </Box>
                ))}
                </CardContent>
            </Card>
        </Box>
    );
};
export default Categories;