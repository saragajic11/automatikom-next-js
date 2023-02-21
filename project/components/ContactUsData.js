const ContactUsData = () => {
    return <div id="contact-us-data-container">

        <div className="first column">
            <span className="title">Sedište kompanije</span>
            <span className="data">AUTOMATIKOM DOO</span>
            <span className="data">Drinska 1</span>
            <span className="data">21000 Novi Sad</span>
            <span className="data">Srbija</span>

{/* 
            <span className="contact mobile data"><img src={"/images/mobile.png"}></img>+381 6449555615</span> */}
            <span className="contact mobile data"><img src={"/images/wire.png"}></img>+381 21 3041862</span>
            <span className="contact data"><img src={"/images/email.png"}></img>office@automatikom.rs</span>
        </div>
        <div className="second column">
            <span className="title">Predstavništvo</span>
            <span className="data">AUTOMATIKOM DOO</span>
            <span className="data">Bulevar Nemanjića 85A L57</span>
            <span className="data">18108 Niš</span>
            <span className="data">Srbija</span>

        </div>

    </div>

    //TODO: APR PDF dodati
}

export default ContactUsData;