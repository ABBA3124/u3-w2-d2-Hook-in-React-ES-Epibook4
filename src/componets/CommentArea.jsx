import React, { useState, useEffect } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

function CommentArea({ book }) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Gestione fetch dei commenti
  useEffect(() => {
    const fetchComments = async () => {
      if (!book || !book.asin) return
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book.asin}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjE0ODdmMzA0NjAwMWFlNTlmODkiLCJpYXQiOjE3MTQ0MDA2MzEsImV4cCI6MTcxNTYxMDIzMX0.rZjkpGaKszaiqZqTQJxeF8pP3knO3GoFbdgDQ6T-itk",
          },
        })
        if (response.ok) {
          const comments = await response.json()
          setComments(comments)
          setIsLoading(false)
        } else {
          throw new Error("Failed to fetch comments")
        }
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }

    fetchComments()
  }, [book]) // refresh commenti quando cambia il libro avviene quando asin cambia

  // aggiungere un commento
  const addComment = (newComment) => {
    setComments((prev) => [...prev, newComment])
  }

  // eliminare un commento
  const deleteComment = async (commentId) => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjE0ODdmMzA0NjAwMWFlNTlmODkiLCJpYXQiOjE3MTQ0MDA2MzEsImV4cCI6MTcxNTYxMDIzMX0.rZjkpGaKszaiqZqTQJxeF8pP3knO3GoFbdgDQ6T-itk",
        },
      })
      if (response.ok) {
        setComments((prev) => prev.filter((comment) => comment._id !== commentId))
        setIsLoading(false)
      } else {
        throw new Error("Failed to delete comment")
      }
    } catch (error) {
      console.error("Errore durante la cancellazione del commento", error)
      setIsLoading(false)
      setError(error.message)
    }
  }

  return (
    <div>
      <h3 className="mt-3 mb-4">⬇️Recensioni⬇️</h3>
      <div className="text-start">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <CommentsList comments={comments} onDelete={deleteComment} />
            <AddComment book={book} onAddComment={addComment} />
          </>
        )}
      </div>
    </div>
  )
}

export default CommentArea
