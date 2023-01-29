import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { componentDidMount } from "react";
import Reference from "../../components/Reference";

const PersonalReferences = () => {

    const router = useRouter();
    const [personalReference, setPersonalReference] = useState([]);

    useEffect(() => {
        setUpPersonalReferences();
    })

    const setUpPersonalReferences = () => {

        const { id } = router.query;
        let personalReferences = JSON.parse(localStorage.getItem("listOfPersonalReferences"));
        if (personalReference.length == 0) {
            if (id == 1) {
                setPersonalReference(personalReferences[0]);
            } else if (id == 2) {
                setPersonalReference(personalReferences[1]);
            } else if (id == 3) {
                setPersonalReference(personalReferences[2]);
            }
        }
    }

    const getListOfProjects = () => {
        let result = [];
        if (personalReference.listOfProjects != undefined) {
            for (let item of personalReference.listOfProjects) {
                result.push(
                    <Reference key={personalReference.listOfProjects.indexOf(item)} listOfProjects={item} />
                )
            }
        }
        return result;
    }

    return <div id="personal-references-container">
        <div className="title">LIČNE REFERENCE</div>
        <div className="name">{personalReference.name}</div>

        <div className="content">
            <div className="img-container">
                <img src={personalReference.image} />
            </div>
            <div className="references-data-container">
                {
                    getListOfProjects()
                }
            </div>
        </div>
    </div>
}

export default PersonalReferences;