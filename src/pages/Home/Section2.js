import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/birthday.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
    {
        image: Pizza,
        title: "VEG PIZZA",
        paragraph: `A delight for veggie lovers! Choose from our wide range of delicious pizzas, it's softer and tastier`,
    },
    {
        image: Salad,
        title: "BIRTHDAY PARTY",
        paragraph: `For bookings and Information, Contact your nearest Pizza Hut's restaurant manager @ 1800-022-2022`,
    },
    {
        image: Delivery,
        title: "FASTEST DELIVERY",
        paragraph: `Order from your nearest pizza outlet to have a hot box of pizza on your table in the next 30 minutes`,
    },
    // Add more mock data objects as needed
];

function Section2() {
    return (
        <>
            <section className="about_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2>Every slice tastes better when you eat it with your family</h2>
                            <p>Some of the most famous pizzas you should try from our menu include the cheesy Margherita, Ultimate Tandoori Veggie, Mazedar Makhni Paneer</p>
                            <Link to="/" className="btn order_now btn_red">Explore Full Menu</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_wrapper">
                <Container>
                    <Row className="justify-content-md-center">
                        {mockData.map((cardData, index) => (
                            <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                                <div className="about_box text-center">
                                    <div className="about_icon">
                                        <img src={cardData.image} className="img-fluid" alt="icon" />
                                    </div>
                                    <h4>{cardData.title}</h4>
                                    <p>{cardData.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section2;
