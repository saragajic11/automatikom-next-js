const Header = () => {

    const handleAboutUsClick = () => {
        let element = document.getElementById("about-us-container");
        element.scrollIntoView({behavior: "smooth"})
    }

    const handleTeamClick = () => {
        let element = document.getElementById("team");
        element.scrollIntoView({behavior: "smooth"})
    }

    const handleContactUsClick = () => {
        let element = document.getElementById("contact-us-container");
        element.scrollIntoView({behavior: "smooth"})
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
            </div>
        </div>
    </div>
}

export default Header;