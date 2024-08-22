import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
export default function Footer() {
    return (
       <>
       <Card>
        <Card.Img variant="top" className="footer-image" src="https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
       </>
    );
}
