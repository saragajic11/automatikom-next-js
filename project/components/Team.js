import { useEffect, useState } from "react";
import Card from "./Card";

const Team = () => {

    const [personalReferences, setPersonalReferences] = useState([]);

    useEffect(() => {
        setUpPersonalReferences();
    })

    const setUpPersonalReferences = () => {
        let listOfPersonalReferences = JSON.parse(localStorage.getItem("listOfPersonalReferences"));
        if (personalReferences.length == 0) {
            setPersonalReferences(listOfPersonalReferences)
            console.log("PR: ", listOfPersonalReferences);
        }
    }

    return <div id="team">

        <span className="title">Team</span>

        <div className="team-container">
            <Card id={personalReferences[0]?.id} name={personalReferences[0]?.name} position={personalReferences[0]?.position} image={personalReferences[0]?.image} description={personalReferences[0]?.description} />
            <Card id={personalReferences[1]?.id} name={personalReferences[1]?.name} position={personalReferences[1]?.position} image={personalReferences[1]?.image} description={personalReferences[1]?.description} />
            <Card id={personalReferences[2]?.id} name={personalReferences[2]?.name} position={personalReferences[2]?.position} image={personalReferences[2]?.image} description={personalReferences[2]?.description} />
            <Card name={"Jovan Jovanovic"} position={"Position 4"} image={"./images/person.png"} description={"Description number 4"} />
            <Card name={"Lazar Lazarevic"} position={"Position 5"} image={"./images/person.png"} description={"Description number 5. This is a longer description in order to check how it works. Looks good so far."} />
        </div>
    </div>
}

export default Team;