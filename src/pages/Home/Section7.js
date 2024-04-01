import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>The Promise of</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
            " So stop googling for the “pizza shops near me” and order from your nearest pizza outlet to have a hot box of pizza on your table in the next 30 minutes! "
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 1800-022-2022
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
