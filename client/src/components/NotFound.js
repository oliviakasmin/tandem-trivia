import React from 'react'
import { Button, Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container>
      <br />
      <h5>oops, seems you've navigated to a page doesn't exist! </h5>
      <br />
      <a href='/'>
        <Button variant='outline-dark'>home</Button>
      </a>
    </Container>
  )
}

export default NotFound
