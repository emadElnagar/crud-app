import { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

function List () {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/books').then((books) => {
      setList(books.data);
    }).catch((err) => {
      console.error(err);
    })
  }, [list]);
  return (
    <ul>
        {
          list.map((book) => (
            <Book key={book._id} book={book} />
          ))
        }
    </ul>
  )
}

export default List;
