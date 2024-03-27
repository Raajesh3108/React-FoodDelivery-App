import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/paneer-tikka.jpg";
import Image2 from "../../assets/menu/french-onion.jpg";
import Image3 from "../../assets/menu/garlic-bread.jpg";
import Image4 from "../../assets/menu/tandoori-paneer.jpg";
import Image5 from "../../assets/menu/greek-pizza.jpg";
import Image6 from "../../assets/menu/firestone-pizza.jpg";
import Image7 from "../../assets/menu/margherita.jpg";
import Image8 from "../../assets/menu/spicy-veg.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Paneer Tikka Pizza",
    paragraph: "A rich fusion of marinated paneer, tangy tomato sauce, sauteed vegetables, and melted mozzarella cheese atop a crispy pizza crust.",
    rating: 4,
    price: 69.99,
  },
  {
    id: "0002",
    image: Image2,
    title: "French Onion Pizza",
    paragraph: "A classic dish featuring caramelized onions, melted Gruyere cheese and a hint of thyme, all nestled on a golden crust for a flavorful culinary.",
    rating: 3.5,
    price: 79.99,
  },
  {
    id: "0003",
    image: Image3,
    title: "Garlic Bread",
    paragraph: "A Warm bread generously slathered with fragrant garlic butter - a delightful treat for your taste buds.",
    rating: 4.5,
    price: 49.99,
  },
  {
    id: "0004",
    image: Image4,
    title: "Tandoori Paneer Pizza",
    paragraph: "It contains succulent pieces of tandoori-spiced paneer, vibrant bell peppers, onions and tomatoes.",
    rating: 4.0,
    price: 99.99,
  },
  {
    id: "0005",
    image: Image5,
    title: "Veggie Greek Pizza",
    paragraph: "A harmonious blend of tangy feta cheese, Kalamata olives, juicy tomatoes, crisp bell peppers and aromatic oregano.",
    rating: 3.5,
    price: 79.99,
  },
  {
    id: "0006",
    image: Image6,
    title: "Firestone Pizza",
    paragraph: "A fiery combination of spicy jalapenos, vegan pepperoni, smoky barbecue sauce, caramelized onions, and melted mozzarella cheese.",
    rating: 3.0,
    price: 59.99,
  },
  {
    id: "0007",
    image: Image7,
    title: "Margherita Pizza",
    paragraph: "A classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
    rating: 5.0,
    price: 79.99,
  },
  {
    id: "0008",
    image: Image8,
    title: "Spicy Veg Pizza",
    paragraph: "It includes spicy toppings such as jalapenos, red paprika, and chili flakes along with onions and capsicum.",
    rating: 3.5,
    price: 89.99,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR DELICIOUS PIZZAS</h2>
            <p className="para">
              Explore our diverse range of delicious pizzas and find your perfect flavor combination.
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CRISPY FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">BUY TWO</h4>
              <h5>GET ONE FREE</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
