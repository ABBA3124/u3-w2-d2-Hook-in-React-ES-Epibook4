import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../CSS/AllTheBooks.css'

function SingleBook({ book, onBookSelect, selectedAsin}) {
    const isSelected = book.asin === selectedAsin;

    return (
        <Card 
          className={`card-container ${isSelected ? 'selected-style' : ''}`}
          onClick={() => onBookSelect(book)}
        >
            <LazyLoadImage
                alt={book.title}
                src={book.img}
                className=""
            />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{`Prezzo: ${book.price}€`}</Card.Text>
                <Card.Text>{`Categoria: ${book.category}`}</Card.Text>
                <Button variant="primary">Dettaglio🔍</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleBook