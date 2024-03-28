import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good food</h2>
              <p>
              Good Food has a remarkable way of uniting people, fostering connections, 
              and creating memorable experiences. It transcends barriers and brings joy to every gathering, 
              making it a centerpiece of shared moments and cherished memories.
              </p>
              <ul>
                <li>
                  <p>
                    There's nothing quite like the excitement of the entire family rushing to the kitchen table on pizza night.
                  </p>
                </li>
                <li>
                  <p>
                    Even the fussiest of eaters can't resist joining in on the pizza love.
                  </p>
                </li>
                <li>
                  <p>
                    No feeling compares to the joy of gathering around the table, sharing laughter and stories over a steaming slice of pizza.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
