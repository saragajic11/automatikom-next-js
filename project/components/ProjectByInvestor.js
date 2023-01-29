const ProjectByInvestor = ({project}) => {

    return <div id="project-by-investor-container">
        <p className="project">{project.project}</p>
        <p className="function">{project.function}</p>
    </div>
}

export default ProjectByInvestor;