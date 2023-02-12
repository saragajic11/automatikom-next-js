import { useRouter } from "next/router";

const Card = ({ id, name, position, image, description }) => {


    const router = useRouter();

    const onClickPersonalReferences = () => {
        router.push({
            pathname: '/references/' + id,
            query: ''
        })
    }

    return <div id="card-container">
        <div className="card-inner">
            <div className="card-front">
                <img src={image} />
            </div>

            <div className="card-back">
                <span className="description">{description}</span>

            </div>
        </div>

        <div className="card-name">
            <span className="name">{name}</span>
            <span className="position">{position}</span>
            <span className="link" onClick={onClickPersonalReferences}>Lične reference</span>
        </div>
    </div>
}


export default Card;
