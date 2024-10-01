import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <button><a href={projectUrl} target="_blank" rel="noopener noreferrer" >Preview</a></button>
        </div>
      </div>
    </Col>
  )
}
