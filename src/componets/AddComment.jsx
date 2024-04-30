import React, { useState } from 'react'

const AddComment = ({ book, onAddComment }) => {
  const [text, setText] = useState('')
  const [rate, setRate] = useState('1') 

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text && rate && book && book.asin) {
      const commentData = {
        comment: text,
        rate: rate,  
        elementId: book.asin
      }

      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjE0ODdmMzA0NjAwMWFlNTlmODkiLCJpYXQiOjE3MTQ0MDA2MzEsImV4cCI6MTcxNTYxMDIzMX0.rZjkpGaKszaiqZqTQJxeF8pP3knO3GoFbdgDQ6T-itk"
        },
        body: JSON.stringify(commentData)
      })

      if (response.ok) {
        const postedComment = await response.json()
        onAddComment(postedComment)
        setText('')
        setRate('1') 
      } else {
        console.error("Errore durante l'invio del commento")
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Scrivi una recensione"
        className='p-1'
      />
      <select
      value={rate}
      onChange={(e) => setRate(e.target.value)}
      className='mx-2'
      >
        {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
        ))}
        </select>
      <button type="submit" className='btn btn-success'>Invia</button>
    </form>
  )
}

export default AddComment