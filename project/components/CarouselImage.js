import { Paper } from "@mui/material";

const CarouselImage = ({ imageSrc }) => {

    return <Paper>
        <img className="carousel-image" src={imageSrc} />
    </Paper>

}

export default CarouselImage;