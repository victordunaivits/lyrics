import { Carousel } from "react-bootstrap";

export default function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images2.imgbox.com/1c/14/OBjso0d1_o.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Metallica - SP</h3>
          <p>Fotos da banda Metallica no show de São Paulo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images2.imgbox.com/02/3b/YYv6ceXw_o.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Metallica - RS</h3>
          <p>Fotos da banda Metallica no show de Porto Alegre.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
