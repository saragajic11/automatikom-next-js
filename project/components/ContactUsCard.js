const ContactUsCard = ({ imageSrc, title, description }) => {

    return <div id="contact-us-card-container">
        <img src={imageSrc} />
        <span className="title">{title}</span>
        <span className="subtitle">{description}</span>
    </div>
}

export default ContactUsCard;