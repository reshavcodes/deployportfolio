import './Project.css';

const Project = ({ projectTitle, projectDescription, image, projectLink,buttonText }) => {
    return (
        <div className="project " data-aos="fade-up" data-aos-duration="800">
            <img src={image} alt="" />
            <div className="project__overlay">
                <h1 class="project__title">{projectTitle}</h1>
                <p class="project__description">{projectDescription}
                </p>
                <a href={projectLink}><button className="btn-grad">{buttonText}</button></a>
            </div>
        </div>
    );
}

export default Project;