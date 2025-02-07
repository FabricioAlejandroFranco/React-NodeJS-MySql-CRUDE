import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {};

  return (
    <div>
      <h1>Bookstore</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt={""} />}
            <h2>{book.title}</h2>
            <h2>{book.desc}</h2>

            <div>
              <span>{book.price}</span>
              <button onClick={() => handleDelete(book.id)} className="delete">
                Delete
              </button>
              <button
                onClick={() => navigate(`/update/${book.id}`)}
                className="update"
              >
                Update
              </button>
            </div>
            <div></div>
          </div>
        ))}
      </div>
      <Link to="/add">Add a Book</Link>
    </div>
  );
};

export default Books;
