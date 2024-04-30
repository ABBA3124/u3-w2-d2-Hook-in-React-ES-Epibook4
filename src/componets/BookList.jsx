import React, { useState } from "react"
import SingleBook from "./SingleBook"
import { Row, Col, Form } from "react-bootstrap"
import CommentArea from "./CommentArea"
import { Alert } from "react-bootstrap"

function BookList({ books }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container mt-3">
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group controlId="searchBooks" className="mb-3">
              <Form.Label>
                <h4>Cerca Libro</h4>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il titolo del libro"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Row>
            {filteredBooks.map((book, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <SingleBook book={book} onBookSelect={setSelectedBook} selectedAsin={selectedBook ? selectedBook.asin : null} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          {selectedBook ? (
            <CommentArea book={selectedBook} />
          ) : (
            <Alert variant="warning">
              <Alert.Heading className="fs-6">Seleziona un Libro per visualizzare le recensioni.</Alert.Heading>
            </Alert>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default BookList
