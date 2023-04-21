function Project({ title, description, image, codeLink, liveLink, technologies }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <img src={image} alt={title} />
        <div className="links">
          <a href={codeLink}>Code</a>
          <a href={liveLink}>Live App</a>
        </div>
      </div>
    );
  }
  
  export default Project;
  