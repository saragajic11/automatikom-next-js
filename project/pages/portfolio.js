import PortfolioContent from "../components/PortfolioContent";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Portfolio = () => {

    const router = useRouter();

    const projects = [
        { id: 1, title: "Projekat broj 1", description: "Opis projekta broj 1.", imgSrc: "/images/example.jpeg" },
        { id: 2, title: "Projekat broj 2", description: "Opis projekta broj 2", imgSrc: "/images/example.jpeg" },
        { id: 3, title: "Projekat broj 3", description: "Opis projekta broj 3", imgSrc: "/images/example.jpeg" },
        { id: 4, title: "Projekat broj 4", description: "Opis projekta broj 4", imgSrc: "/images/example.jpeg" },
        { id: 5, title: "Projekat broj 5", description: "Opis projekta broj 5", imgSrc: "/images/example.jpeg" },

    ];

    const getProjects = () => {
        let result = [];
        for (let item of projects) {
            result.push(
                <PortfolioContent item={item} index={projects.indexOf(item)} />
            )
        }
        return result;
    }

    const sendUsAMessageClicked = (e) => {
        e.preventDefault();
        router.push("/");
        setTimeout(() => {
            let element = document.getElementById("contact-us-container");
            element?.scrollIntoView({behavior: "smooth"})
          }, 500);
    }

    return <div id="portfolio-container">
        <div className="title">OUR PORTFOLIO</div>
        <div className="subtitle">We are very proud of what we do. <br /> Good comunication and even better results are what gets recognized. You can find the list <br /> of our finished or ongoing projects below.</div>
        <div className="projects">
            {
                getProjects()
            }
        </div>
        <div className="contact-us-section">
            <span className="contact first">Interested in what we do?</span>
            <span className="contact">Don't hesitate to contact us. Send us an email and we will respond as quickly as possible.</span>
            <Button className="submit-btn" onClick={sendUsAMessageClicked}>
                SEND US A MESSAGE
            </Button>
        </div>
    </div>
}

export default Portfolio;