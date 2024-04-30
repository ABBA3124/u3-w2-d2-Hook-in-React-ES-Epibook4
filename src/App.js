import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './componets/MyNav'
import MyFooter from './componets/MyFooter'
import Welcome from './componets/Welcome'
import BookList from './componets/BookList'
import fantasy from "./books/fantasy.json"
import history from "./books/history.json"
import horror from "./books/horror.json"
import romance from "./books/romance.json"
import scifi from "./books/scifi.json"
import { Container, Row, Col, Form } from 'react-bootstrap'




function App() {
  const [genre, setGenre] = useState('all')
  const books = { fantasy, history, horror, romance, scifi }

  const allBooks = Object.values(books).flat()
  const displayedBooks = genre === 'all' ? allBooks : books[genre]

  return (
    <div className="App">
      <header>
      <MyNav/>
      <Welcome/>
      </header>
      <main>
    <Container className="mt-3">
      <Row>
        <Col>
          <Form.Group controlId="genreSelect">
            <Form.Label><h5>Filtra Per Categoria</h5></Form.Label>
            <Form.Control as="select" value={genre} onChange={e => setGenre(e.target.value)}>
            <option value="all">Tutti</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">Storia</option>
              <option value="horror">Horror</option>
              <option value="romance">Romanzo</option>
              <option value="scifi">Fantascienza</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </Container>
    <BookList books={displayedBooks} />
  </main>
      <MyFooter/>
    </div>
  )
}

export default App
