import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import './AddBook.css'; // Import the CSS for styling

const AddBook = () => {
    const navigate = useNavigate();
    const [book, setBook] = useState({ title: "", author: "", description: "", coverImage: "" });
    
    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Book added:', book);
       alert('Book added successfully');
       navigate('/');
    };

    return (
        <div className="add-book-container">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
        <input type="text" name="title" value={book.title} onChange={handleChange} />
        <label>Author:</label>
        <input type="text" name="author" value={book.author} onChange={handleChange} />
        <label>Description:</label>
        <input type="text" name="description" value={book.description} onChange={handleChange} />
        <label>Cover Image URL:</label>
        <input type="text" name="coverImage" value={book.coverImage} onChange={handleChange} />
        <button type="submit">Add Book</button>
        </form>
        </div>

    );

};

export default AddBook;

