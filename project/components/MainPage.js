import CarouselContainer from '../Components/CarouselContainer'
import AboutUs from '../Components/AboutUs';
import Team from '../Components/Team';
import ContactUs from '../Components/ContactUs';

const MainPage = ({ setLoading, showMessage }) => {

    return <div id="main-container">
        <CarouselContainer />
        <AboutUs />
        <Team />
        <ContactUs setLoading={setLoading} showMessage={showMessage} />
    </div>
}

export default MainPage;