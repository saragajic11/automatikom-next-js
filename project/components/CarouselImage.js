import { Paper } from "@mui/material";

const CarouselImage = ({ imageSrc }) => {

    return <Paper>
        <img className="carousel-image" src={imageSrc} />
        {/* <span className="carousel-text">The art of automation</span> */}
    </Paper>

}

export default CarouselImage;