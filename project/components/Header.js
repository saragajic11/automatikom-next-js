import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {

    const router = useRouter();

    const [isCollapsed, setCollapsed] = useState(true);

    const scrollElementIntoView = (id) => {
        let element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" })
    }

    const handleNavItemClick = (e, key) => {
        e.preventDefault();
        setCollapsed(true);
        switch (key) {
            case "home": {
                router.push("/");
                break;
            }
            case "about-us": {
                router.push("/");
                setTimeout(() => {
                    scrollElementIntoView("about-us-container");
                }, 4000);
                break;
            }
            case "team": {
                router.push("/");
                setTimeout(() => {
                    scrollElementIntoView("team");
                }, 4000)
                break;
            }
            case "contact": {
                router.push("/");
                setTimeout(() => {
                    scrollElementIntoView("contact-us-container");
                }, 4000);
                break;
            }
            case "portfolio": {
                router.push("/portfolio");
                break;
            }
        }
    }

    return <div id={"header"} className={!isCollapsed ? "topnav responsive" : "topnav"}>
        <div className={"header-logo-container"}>
            <img className={"logo"} src={"/images/logo.png"} />
        </div>
        <div className={"header-nav-container"}>
            <div className={"empty"}></div>
            <div className="nav-items">
                <span className="home nav-item" onClick={(e) => handleNavItemClick(e, "home")}>Početna</span>
                <span className="about-us nav-item" onClick={(e) => handleNavItemClick(e, "about-us")}>O nama</span>
                <span className="team nav-item" onClick={(e) => handleNavItemClick(e, "team")}>Tim</span>
                <span className="contact nav-item" onClick={(e) => handleNavItemClick(e, "contact")}>Kontakt</span>
                <span className="portfolio nav-item" onClick={(e) => handleNavItemClick(e, "portfolio")}>Portfolio</span>
            </div>
        </div>
        <div className="button" onClick={() => setCollapsed(!isCollapsed)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div >
}

export default Header;