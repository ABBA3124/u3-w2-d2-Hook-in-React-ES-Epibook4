import React, { useState, useEffect } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import "../CSS/AllTheBooks.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import SingleBook from "./SingleBook"


function AllTheBooks() {
    const [books, setBooks] = useState({
      All: [], 
      fantasy: fantasy,
      history: history,
      horror: horror,
      romance: romance,
      scifi: scifi
    })
  
    const [filter, setFilter] = useState("All")
  
    useEffect(() => {
      setBooks(prevBooks => ({ ...prevBooks, All: [...fantasy, ...history, ...horror, ...romance, ...scifi] }))
    }, [])
  
    return (
      <Container>
        <Row>
          <Col>
            <select className="form-select form-select-lg mb-3" onChange={d => setFilter(d.target.value)} value={filter}>
              <option value="All">Tutti i Libri</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">Storia</option>
              <option value="horror">Horror</option>
              <option value="romance">Romanzo</option>
              <option value="scifi">Fantascienza</option>
            </select>
          </Col>
        </Row>
        <Row> 
          {books[filter].map((book, index) => (
            <Col className="ciao" key={index} sm={12} md={6} lg={4} xl={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    )
}  

export default AllTheBooks
      

