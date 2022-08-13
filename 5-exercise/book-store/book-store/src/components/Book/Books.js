import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Book from '../Book/Book';
import "./Book.css";
const URL = "http://localhost:5000/books";

const fetchHandler = async()=>{
const data = await axios(URL)
.then(res =>res.data)
.catch(err =>console.log(err));
return data;
}
const Books = () => {
  const[books, setBooks] = useState()
  useEffect(()=>{
    fetchHandler().then((data)=>setBooks(data.books));
  }, [])
console.log(books)
  return (
    <div>
<ul>
  {books && books.map((book, i) =>(
  <div key={i} className="card">
      <Book book={book}/>
    </div>
    )
    
  )}
</ul>
    </div>
  )
}

export default Books
