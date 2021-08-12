import { react } from "react";
import { Container, Carousel } from "react-bootstrap";
import keyboard1 from "./homePage-images/tfue-board.jpg";
import keyboard2 from "./homePage-images/red-board.jpg";
import keyboard3 from "./homePage-images/large_thumb_b0a6.jpg";
import "./homePage.css";
import ItemCard from "../cards/card";

function HomePage() {


    return (
        <div>
            <Carousel fade className="Carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={keyboard1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={keyboard2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={keyboard3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container>
                <ItemCard />
            </Container>
        </div>
    )
}

export default HomePage;