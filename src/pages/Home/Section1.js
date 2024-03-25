import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
    return (
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div className="position-relative">
                            <img src={Pizza} className="img-fluid" alt="Hero" />
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs">Only</h4>
                                    <h4 className="h3_lg">$9.89</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className="text-white">New Melts</h1>
                            <h2 className="text-white">Chrispy</h2>
                            <p className="text-white pt-2 pb-4">
                                Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.
                            </p>
                            <Link to="/" className="btn order_now">
                                Order Now
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Section1;
