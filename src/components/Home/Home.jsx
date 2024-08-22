import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
export default function Home() {
    return (
        <>
        <section className="section-1">  {/* Section 1 Start here */}
        <Card className="bg-dark text-white">
      <Card.Img src="https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="title-header">Click for More</Card.Title>
        <Card.Text className="para-title">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text className="para-title">Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

        </section> {/* Section 1 end here */}


       <section className="section-2">  {/* Section 2 Start here */}
       <CardGroup className="group-images">
      <Card className="group-images-1">
        <Card.Img className="group-images-2" variant="top" src="https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>Karachi</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">More</Button>
        </Card.Footer>
      </Card>
      <Card className="group-images-1">
        <Card.Img className="group-images-2" variant="top" src="https://images.unsplash.com/photo-1723015891294-e3b121c897b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>Dubai</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">More</Button>
        </Card.Footer>
      </Card>
      <Card className="group-images-1">
        <Card.Img className="group-images-2" variant="top" src="https://images.unsplash.com/photo-1723662396338-23ca8f551759?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>Newzealand Dog</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
        <Button variant="primary">More</Button>
        </Card.Footer>
      </Card>
    </CardGroup>


       </section> {/* Section 2 end here */}
       
         <section className="section-3"> {/* Section 3 Start here */}

         <CardGroup className="group-images">
      <Card className="group-images-1">
        <Card.Img className="group-images-2" variant="top" src="https://images.unsplash.com/photo-1722778610349-e3c02e277ec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>Karachi</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">More</Button>
        </Card.Footer>
      </Card>
      <Card className="group-images-1">
        <Card.Img className="group-images-2" variant="top" src="https://images.unsplash.com/photo-1723015891294-e3b121c897b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>Dubai</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">More</Button>
        </Card.Footer>
      </Card>
      <Card className="group-images-1">
        <Card.Img className="group-images-2" variant="top" src="https://images.unsplash.com/photo-1723383654642-cfbeb2d27881?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>Newzealand Dog</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
        <Button variant="primary">More</Button>
        </Card.Footer>
      </Card>
    </CardGroup>


         </section>{/* Section 3 end here */}

        </>
    );
}
