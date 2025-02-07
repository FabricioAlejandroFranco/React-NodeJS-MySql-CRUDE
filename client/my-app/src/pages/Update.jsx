import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books/${bookId}`);
        setBook(res.data);
      } catch (error) {}
    };
    fetchBook();
  }, [bookId]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={book.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="desc"
        value={book.desc}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Cover"
        name="cover"
        value={book.cover}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={book.price}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
