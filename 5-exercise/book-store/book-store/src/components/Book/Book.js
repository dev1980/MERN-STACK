import React from 'react'

const Book = (props) => {
  const {name, author, description, price, image} = props.book;
  return (
    <div className='card__content'>
      <img src={image} alt={name} className="image" />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>USD {price}</h2>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default Book
