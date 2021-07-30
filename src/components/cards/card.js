import react from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCard(props) {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" image={props.post.image} />
                <Card.Body>
                    <Card.Title>GMK BLACK ON WHITE</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Profile</Card.Link>
                    <Card.Link href="#">Reviews</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default ItemCard;