import PortfolioContent from "../components/PortfolioContent";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import LoaderContext from '../context/LoaderContext';

const Portfolio = () => {

    const router = useRouter();
    const { setLoading } = useContext(LoaderContext);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [])

    const projects = [
        { id: 1, title: "SIEMENS", description: "Migracija S5 na S7 CCHBC Rosa Vlasina", imgSrc: "/images/prj-9.jpeg" },
        { id: 2, title: "BARRY CALLEBAUT", description: "Promena algoritma upravljanja splinker sistemom i integracija na PP fabrike", imgSrc: "/images/prj-8.png" },
        { id: 3, title: "Moravacem DOO Popovac", description: "Rekonstrukcija upavljačkog  sistema izuzimača - kracera, izrada upravljačkog algoritma za zakošenje bagera", imgSrc: "/images/prj-7.png" },
        { id: 4, title: "JKP Subotička toplana", description: "Izrada projektne dokumentacije PZI za Upravljački sistem vrelovodnog grejanja mazuta, isporuka i postavljanje senzora vibracije na pumpne agragate i integracija na SCADA sistem, proširivanje pogonskih kapaciteta", imgSrc: "/images/prj-3.jpeg" },
        { id: 5, title: "Biospringer RS d.o.o.", description: "Integracija merača nivoa u fermetorima na upravljački sistem, rekonstrukcija upravljačkog sistema klima komora, izmena upravljačkog algoritma procedure doziranja tople vode u toplu bazu i kiselinu u pogonu CIP-a, ugradnja merača nivoa i protoka, povezivanje na lokaciju pripreme melase i reducir stanice, izrada dokumentacije izvedenog stanja industrijske Ethernet mreže u Fabrici ekstrakta kvasca, izrada WEB SCADA sistema", imgSrc: "/images/prj-2.png" },
        { id: 6, title: "Sunoko DOO PC Vrbas", description: "Migracija DCS upravljačkog sistema kuvanja PCS7 v.7.1 na v.9.1", imgSrc: "/images/prj-4.jpeg" },
        { id: 7, title: "Novi Trading d.o.o.", description: "Prosirenje upravljačkog sistema silosa za žitarice", imgSrc: "/images/prj-1.jpeg" },
        { id: 8, title: "Elex-Commerce", description: "Soltaris Advanced, Soltaris Basic", imgSrc: "/images/prj-5.png" },
        { id: 9, title: "Mikro Kontrol D.O.O.", description: "Provera izvedenih elektro instalacija, testiranje i puštanje u rad sistema za pripremu rastvora na staroj impregnaciji u rad fabrike EP Belt Loznica", imgSrc: "/images/prj-6.jpeg" },
        { id: 10, title: "Remming", description: "Isporuka grejnih kablova i upravljanja grejanja toplom vodom mazutnih vodova u JKP Toplana Subotica", imgSrc: "/images/prj-10.jpeg" },
        { id: 11, title: "CRH Thermostone Novska", description: "Izrada projekta sistema automatskog doziranja sirovina i mešaone, nabavka, isporuka i ugradnja opreme (ventila, vakuum pumpi, senzorike, PLC, HMI, SCADA...) kojom se automatizuje sistem autoklavova (izrada upravljačkih softvera)", imgSrc: "/images/prj-11.png" },


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
            element?.scrollIntoView({ behavior: "smooth" })
        }, 4000);
    }

    return <div id="portfolio-container">
        <div className="title">NAŠ PORTFOLIO</div>
        <div className="subtitle">Veoma smo ponosni na ono čime se bavimo, i na klijente sa kojima sarađujemo. <br /> Dobra komunikacija i još bolji rezultati su ono što se prepoznaje.</div>
        <div className="projects">
            {
                getProjects()
            }
        </div>
        <div className="contact-us-section">
            <span className="contact first">Zanima Vas čime se bavimo?</span>
            <span className="contact">Ne oklevajte da nas kontaktirate. Pošaljite nam email i odgovorićemo ubrzo.</span>
            <Button className="submit-btn" onClick={sendUsAMessageClicked}>
                POŠALJITE PORUKU
            </Button>
        </div>
    </div>
}

export default Portfolio;