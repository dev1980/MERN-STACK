import React, {useState} from 'react'
import './AddBook.css'
const AddBook = () => {
  const [inputs, setInputs] = useState({
    name:"",
    author:"",
    description:"",
    price:"",
    image:"",
    availabe:false
  })
  return (
    
    <form className='addBook'>
     <label>Name:</label>
     <input type='text' />

     <label>Author:</label>
     <input type='text' />

     <label>Description:</label>
     <input type='text' />

     <label>Price:</label>
     <input type='Number' />

     <label>Image:</label>
     <input type='text' />

     <input type='checkBox'/>
     <label>Availabe</label>
     

 <input type='submit' />

    </form>
  )
}

export default AddBook
