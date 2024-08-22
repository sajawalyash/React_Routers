import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {

  return (
<>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <FontAwesomeIcon icon="fa-solid fa-address-book" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

</>
  )
}

export default Contact
