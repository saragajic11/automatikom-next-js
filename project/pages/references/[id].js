import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Reference from "../../components/Reference";
import { listOfPersonalReferences } from "../../context/variables";

const PersonalReferences = () => {
    const router = useRouter();
    const [personalReference, setPersonalReference] = useState([]);

    useEffect(() => {
        setUpPersonalReferences();
    }, [personalReference]);

    const setUpPersonalReferences = () => {

        const { id } = router.query;
        let personalReferences = listOfPersonalReferences;
        if (id == 1) {
            setPersonalReference(personalReferences[0]);
        } else if (id == 2) {
            setPersonalReference(personalReferences[1]);
        } else if (id == 3) {
            setPersonalReference(personalReferences[2]);
        } else if (id == 4) {
            setPersonalReference(personalReferences[3]);
        } else if (id == 5) {
            setPersonalReference(personalReferences[4]);
        } else if (id == 6) {
            setPersonalReference(personalReferences[5]);
        } else if (id == 7) {
            setPersonalReference(personalReferences[6]);
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