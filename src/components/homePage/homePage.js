import { react } from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-strap";


function HomePage() {



    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomePage;