import Card from "./Card";

const Team = () => {


    return <div id="team">

        <span className="title">Team</span>

        <div className="team-container">
            <Card name={"Marko Markovic"} position={"Position 1"} image={"./images/person.png"} description={"Description number 1. This is a longer description in order to check how it works. Looks good so far."} />
            <Card name={"Dusko Duskovic"} position={"Position 2"} image={"./images/person.png"} description={"Description number 2"} />
            <Card name={"Petar Petrovic"} position={"Position 3"} image={"./images/person.png"} description={"Description number 3"} />
            <Card name={"Jovan Jovanovic"} position={"Position 4"} image={"./images/person.png"} description={"Description number 4"} />
            <Card name={"Lazar Lazarevic"} position={"Position 5"} image={"./images/person.png"} description={"Description number 5. This is a longer description in order to check how it works. Looks good so far."} />
        </div>
    </div>
}

export default Team;