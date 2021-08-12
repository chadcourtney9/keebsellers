import react from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeHolder from "./cardImageHolder/blackonwhite.jpg";
import "./card.css"

function ItemCard(props) {

    return (
        <div>
            <Card style={{ width: '18rem' }} className="itemCard">
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>GMK BLACK ON WHITE</Card.Title>
                    <Card.Text>
                        Bought these to go with a build, ended up going a different route on the color scheme and had already bought these.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Condition: Unopened</ListGroupItem>
                    <ListGroupItem>Price: $120</ListGroupItem>
                </ListGroup>
                {/* to add later to look at a users profile and other posts, but also to see their reviews from other users */}

                {/* <Card.Body>
                    <Card.Link as={Link} to={user.uid}>Profile</Card.Link>
                    <Card.Link as={Link} to={user.uid.reviews}>Reviews</Card.Link>
                </Card.Body> */}
            </Card>
            <Card style={{ width: '18rem' }} className="itemCard">
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>GMK BLACK ON WHITE</Card.Title>
                    <Card.Text>
                        Bought these to go with a build, ended up going a different route on the color scheme and had already bought these.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Condition: Unopened</ListGroupItem>
                    <ListGroupItem>Price: $120</ListGroupItem>
                </ListGroup>
                {/* to add later to look at a users profile and other posts, but also to see their reviews from other users */}

                {/* <Card.Body>
                    <Card.Link as={Link} to={user.uid}>Profile</Card.Link>
                    <Card.Link as={Link} to={user.uid.reviews}>Reviews</Card.Link>
                </Card.Body> */}
            </Card>
            <Card style={{ width: '18rem' }} className="itemCard">
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>GMK BLACK ON WHITE</Card.Title>
                    <Card.Text>
                        Bought these to go with a build, ended up going a different route on the color scheme and had already bought these.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Condition: Unopened</ListGroupItem>
                    <ListGroupItem>Price: $120</ListGroupItem>
                </ListGroup>
                {/* to add later to look at a users profile and other posts, but also to see their reviews from other users */}

                {/* <Card.Body>
                    <Card.Link as={Link} to={user.uid}>Profile</Card.Link>
                    <Card.Link as={Link} to={user.uid.reviews}>Reviews</Card.Link>
                </Card.Body> */}
            </Card>
            <Card style={{ width: '18rem' }} className="itemCard">
                <Card.Img variant="top" src={placeHolder} />
                <Card.Body>
                    <Card.Title>GMK BLACK ON WHITE</Card.Title>
                    <Card.Text>
                        Bought these to go with a build, ended up going a different route on the color scheme and had already bought these.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Condition: Unopened</ListGroupItem>
                    <ListGroupItem>Price: $120</ListGroupItem>
                </ListGroup>
                {/* to add later to look at a users profile and other posts, but also to see their reviews from other users */}

                {/* <Card.Body>
                    <Card.Link as={Link} to={user.uid}>Profile</Card.Link>
                    <Card.Link as={Link} to={user.uid.reviews}>Reviews</Card.Link>
                </Card.Body> */}
            </Card>
        </div>
    )
}


export default ItemCard;