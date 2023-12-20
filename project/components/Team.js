import { useEffect, useState } from "react";
import { listOfPersonalReferences } from "../context/variables";
import Card from "./Card";

const Team = () => {

    const [personalReferences, setPersonalReferences] = useState([]);

    useEffect(() => {
        setUpPersonalReferences();
    })

    const setUpPersonalReferences = () => {
        let listOfReferences = listOfPersonalReferences;
        if (personalReferences.length == 0) {
            setPersonalReferences(listOfReferences)
        }
    }

    return <div id="team">

        <span className="title">Naš tim</span>

        <div className="team-container">
            <Card id={personalReferences[0]?.id} name={personalReferences[0]?.name} position={personalReferences[0]?.position} image={personalReferences[0]?.image} description={personalReferences[0]?.description} />
            <Card id={personalReferences[1]?.id} name={personalReferences[1]?.name} position={personalReferences[1]?.position} image={personalReferences[1]?.image} description={personalReferences[1]?.description} />
            <Card id={personalReferences[2]?.id} name={personalReferences[2]?.name} position={personalReferences[2]?.position} image={personalReferences[2]?.image} description={personalReferences[2]?.description} />
            <Card id={personalReferences[3]?.id} name={personalReferences[3]?.name} position={personalReferences[3]?.position} image={personalReferences[3]?.image} description={personalReferences[3]?.description} />
            <Card id={personalReferences[4]?.id} name={personalReferences[4]?.name} position={personalReferences[4]?.position} image={personalReferences[4]?.image} description={personalReferences[4]?.description}  />
            <Card id={personalReferences[5]?.id} name={personalReferences[5]?.name} position={personalReferences[5]?.position} image={personalReferences[5]?.image} description={personalReferences[5]?.description}  />
            <Card id={personalReferences[6]?.id} name={personalReferences[6]?.name} position={personalReferences[6]?.position} image={personalReferences[6]?.image} description={personalReferences[6]?.description}  />
            <Card id={personalReferences[7]?.id} name={personalReferences[7]?.name} position={personalReferences[7]?.position} image={personalReferences[7]?.image} description={personalReferences[7]?.description}  />
        </div>
    </div>
}

export default Team;