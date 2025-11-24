import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Editor from 'react-simple-wysiwyg';
import {TextField, FormControl, InputLabel, Select, MenuItem, Box, Card, CardContent, Typography, Button} from "@mui/material"

const AddNote = ({}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const [categoryChoices, setCategoryChoices] = useState([]);
    const [existingNotes, setExistingNotes] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("categories") !== null) {
            setCategoryChoices(JSON.parse(localStorage.getItem("categories")));
        }
        if (localStorage.getItem("notes") !== null) {
            setExistingNotes(JSON.parse(localStorage.getItem('notes')))
        }
        console.log(existingNotes)
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            id: existingNotes.length + 1,
            title: title,
            content: content,
            category: category,
            date: new Date()
        }
        const newNotes = [...existingNotes, newNote]
        setExistingNotes([...existingNotes, newNote])
        localStorage.setItem('notes', JSON.stringify(newNotes))
        //Possible Solution
        // 1. Get the item again from localStorage and replace existingNotes.
        // 2. Refresh the page programmatically.
        // 3. 
        console.log(localStorage.getItem('notes'))
        navigate("/")
    };

    return (
        // <div className="container mt-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8 col-lg-6">
        //             <div className="card shadow">
        //                 <div className="card-body">
        //                     <h2 className="card-title text-center mb-4">Add New Note</h2>
        //                     <form onSubmit={handleSubmit}>
        //                         <div className="mb-3">
        //                             {/* <input type="text" className="form-control" id="noteTitle" placeholder="Enter note title" value={title} onChange={(e) => setTitle(e.target.value)} /> */}
        //                             <TextField fullWidth id="noteTitle" label="Enter note title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>
        //                         </div>
        //                         <div className="mb-3">
        //                             {/* <select className="form-control" id="noteCategory" value={category} onChange={(e) => setCategory(e.target.value)}>
        //                                 <option value="">Select a category</option>
        //                                 {categoryChoices.map((cat, index) => (
        //                                     <option key={index} value={cat}>
        //                                         {cat}
        //                                     </option>
        //                                 ))}
        //                             </select> */}
        //                             <FormControl fullWidth>
        //                                 <InputLabel id="demo-simple-select-label">Select a category</InputLabel>
        //                                 <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Category" onChange={(event) => setCategory(event.target.value)}>
        //                                     <MenuItem value={"all"}>All Categories</MenuItem>
        //                                     {categoryChoices.map((category, key) => (
        //                                         <MenuItem key={key} value={category}>
        //                                             {category}
        //                                         </MenuItem>
        //                                     ))}
        //                                 </Select>
        //                             </FormControl>
        //                         </div>
        //                         <div className="mb-3">
        //                             {/* <textarea className="form-control" id="noteContent" placeholder="Enter note content" value={content} onChange={(e) => setContent(e.target.value)} rows="10" />   */}
        //                             <Box sx={{ mt: 3 }}>
        //                                 <Editor containerProps={{ style: { height: '300px' } }} value={content} onChange={(e) => setContent(e.target.value)} />
        //                             </Box>
        //                         </div>
        //                         <div className="d-grid">
        //                             <button type="submit" className="btn btn-primary">
        //                                 Add Note
        //                             </button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Card sx={{ maxWidth: 600, mx: "auto", mt: 5, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" align="center" sx={{ mb: 3 }}>
                Add New Note
                </Typography>

                <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                    <TextField
                    fullWidth
                    id="noteTitle"
                    label="Enter note title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    <FormControl fullWidth>
                    <InputLabel id="category-label">Select a category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="noteCategory"
                        value={category}
                        label="Select a category"
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <MenuItem value={"all"}>All Categories</MenuItem>
                        {categoryChoices.map((cat, key) => (
                        <MenuItem key={key} value={cat}>
                            {cat}
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Editor
                    containerProps={{ style: { height: "300px" } }}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </Box>

                <Button type="submit" variant="contained" fullWidth>
                    Add Note
                </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AddNote;
