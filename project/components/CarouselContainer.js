import Carousel from "react-material-ui-carousel";
import CarouselImage from "./CarouselImage";

const CarouselContainer = () => {

    return <div id="carousel-container">
        <Carousel id="carousel" autoPlay={true} interval={4000} navButtonsAlwaysInvisible={true}>
            <CarouselImage imageSrc={"./images/carousel1.jpeg"} />
            <CarouselImage imageSrc={"./images/carousel2.jpg"} />
            <CarouselImage imageSrc={"./images/carousel3.jpg"} />
        </Carousel>
    </div>

}

export default CarouselContainer;