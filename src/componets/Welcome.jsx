import React from "react"
import {Alert} from 'react-bootstrap'
import '../CSS/Welcome.css'

function Welcome() {
    return (
        <div className="welcome-container m-4">
            <Alert variant="success">
                <Alert.Heading>Benvenuto su EpiBooks !</Alert.Heading>
            </Alert>
            <h2>Scopri Tutti I Nostri Libri !</h2>
        </div>
    )
}


export default Welcome