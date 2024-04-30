import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../CSS/MyFooter.css'

function MyFooter() {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container fluid className="py-3">
        <Row>
          <Col md={6}>
            <h5>EpiBooks</h5>
            <p>Il tuo negozio di libri preferito!</p>
          </Col>
          <Col md={6}>
            <h5>Contatti</h5>
            <ul className='list-unstyled'>
              <li>Email: info@EpiBooks.com</li>
              <li>Telefono: +39 0941 361012</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            © 2024 EpiBooks, Tutti i diritti riservati.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
