import ProjectByInvestor from "./ProjectByInvestor";

const Reference = ({ listOfProjects }) => {

    const getProjectByInvestor = () => {
        let result = [];
        for(let item of listOfProjects.projects) {
            result.push(
                <ProjectByInvestor key={listOfProjects.projects.indexOf(item)} project={item} />
            )
        }
        return result;
    }

    return <div id="reference-container">
        <span className="investor">{listOfProjects.id}. {listOfProjects.investor}</span>
        {
            getProjectByInvestor()
        }
    </div>
}

export default Reference;