import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();

    const scrollElementIntoView = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth"})
    }


    const handleAboutUsClick = (e) => {
        e.preventDefault();
        router.push("/");
        setTimeout(() => {
            scrollElementIntoView("about-us-container");
          }, 200);

    }

    const handleTeamClick = (e) => {
        e.preventDefault();
        router.push("/");
        setTimeout(() => {
            scrollElementIntoView("team");
          }, 200);
    }

    const handleContactUsClick = (e) => {
        e.preventDefault();
        router.push("/");
        setTimeout(() => {
            scrollElementIntoView("contact-us-container");
          }, 200);
    }

    const handlePortfolioClick = (e) => {
        e.preventDefault();
        router.push("/portfolio");
    }

    return <div id={"header"}>
        <div className={"header-logo-container"}>
            <img className={"logo"} src={"/images/logo.png"} />
        </div>
        <div className={"header-nav-container"}>
            <div className={"empty"}></div>
            <div className={"nav-items"}>
                <span className={"about-us-nav-item"} onClick={handleAboutUsClick}>About us</span>
                <span className={"team-nav-item"} onClick={handleTeamClick}>Team</span>
                <span className={"contact-nav-item"} onClick={handleContactUsClick}>Contact us</span>
                <span className={"portfolio-item"} onClick={handlePortfolioClick}>Portfolio</span>
            </div>
        </div>
    </div>
}

export default Header;