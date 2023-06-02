import { Paper } from "@mui/material";

const CarouselImage = ({ imageSrc }) => {

    return <div className="carousel-text-img-container">
        <img className="carousel-image" src={imageSrc} />
        <span className="carousel-text">Umetnost automatizacije</span>
    </div>

}

export default CarouselImage;