import htmlIcon from "../assets/img/html-icon.svg";
import cssIcon from "../assets/img/css-icon.svg";
import jsIcon from "../assets/img/javascript-icon.svg";
import reactIcon from "../assets/img/react-icon.svg";
import javaIcon from "../assets/img/java-icon.svg";
import pythonIcon from "../assets/img/python-icon.svg";
import csharpIcon from "../assets/img/csharp-icon.svg";
import gitIcon from "../assets/img/git-icon.svg";
import githubIcon from "../assets/img/github-icon.svg";
import mysqlIcon from "../assets/img/mysql-icon.svg";
import figmaIcon from "../assets/img/figma-icon.svg";
import bootstrapIcon from "../assets/img/bootstrap-icon.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={round} alt="Image-1" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={round} alt="Image-2" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={round} alt="Image-3" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={round} alt="Image-4" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
                        <div className="row">
                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={htmlIcon} alt="" />
                            </div>
                          </div>

                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={cssIcon} alt="" />
                            </div>
                          </div>

                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={jsIcon} alt="" />
                            </div>
                          </div>

                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={reactIcon} alt="" />
                            </div>
                          </div>
                          
                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={bootstrapIcon} alt="" />
                            </div>
                          </div>
                          
                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={javaIcon} alt="" />
                            </div>
                          </div>

                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={pythonIcon} alt="" />
                            </div>
                          </div>

                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={csharpIcon} alt="" />
                            </div>
                          </div>

                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={gitIcon} alt="" />
                            </div>
                          </div>
                          
                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={githubIcon} alt="" />
                            </div>
                          </div>
                          
                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={mysqlIcon} alt="" />
                            </div>
                          </div>
                          
                          <div className="item d-flex align-tems-center justify-content-center col-lg-3">
                            <div className="item-img" >
                              <img src={figmaIcon} alt="" />
                            </div>
                          </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image-5" />
    </section>
  )
}
