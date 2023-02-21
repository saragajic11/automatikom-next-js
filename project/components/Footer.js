const Footer = () => {

    return <div id="footer-container">
        <div className="top">
            <div className="logo-container">
                <img src={"/images/logo.png"}></img>
            </div>
            <div className="information-container">
                <div className="contact-container">
                    <span className="title">ADRESA</span>
                    <span className="data">Automatikom d.o.o.</span>
                    <span className="data">Drinska 1</span>
                    <span className="data">21000 Novi Sad, Srbija</span>
                </div>
                <div className="contact-container">
                    <span className="title">KONTAKT</span>
                    <span className="data">M: +381 6449555615</span>
                    <span className="data">T: +381 21523878</span>
                    <span className="data">E: office@automatikom.com</span>
                </div>
                <div className="sertificates-container">
                    <span className="title">SERTIFIKATI</span>
                    <span className="data"><a className="file-link" href={"/files/identifikacioni-list.pdf"}>Identifikacioni podaci kompanije</a></span>
                </div>
            </div>
        </div>
        <div className="bottom">
            <span>Automatikom doo. Sva prava zadržana.</span>
        </div>
    </div>
}

export default Footer;