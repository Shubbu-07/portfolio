import Typical from "react-typical";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Profile-Photo.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from 'react-scroll';
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Shubham`} <br />
                    <Typical
                      steps={["Web Developer", 1000, "Web Designer", 1000, "Presentation Designer", 1000]}
                      loop={Infinity}
                      wrapper="span"
                    />
                  </h1>
                  <p>
                    A passionate Web Developer, Presentation Designer & aspiring Software Engineer. I
                    specialize in building modern web applications and crafting
                    impactful presentations that engage and inspire. Let’s
                    collaborate to bring your ideas to life!
                  </p>
                  <Link to="connect" smooth={true} duration={500}>
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={headerImg}
                    alt="Header Img"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
