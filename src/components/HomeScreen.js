import React, { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import generateJoke from '../function/generateJoke'

const HomeScreen = () => {
  useEffect(() => {
    const jokeBtn = document.getElementById('jokeBtn')
    jokeBtn.addEventListener('click', generateJoke)

    generateJoke()
  })
  return (
    <>
      <Card className="text-center py-3 bg-warning">
        <Card.Body>
          <Card.Title id="joke" className="joke" />
        </Card.Body>
      </Card>
      <Container className="text-center py-3">
        <Button
          onClick={generateJoke}
          id="jokeBtn"
          className="btn"
          variant="success"
        >
          Get Another Joke
        </Button>
      </Container>
    </>
  )
}

export default HomeScreen
