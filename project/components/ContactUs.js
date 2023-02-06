import { useForm } from "react-hook-form";
import { submitContactUsForm } from "../services/ContactService";
import ContactUsCard from "./ContactUsCard";
import ContactUsData from "./ContactUsData";
import ContactUsForm from "./ContactUsForm";
import MapContainer from "./MapContainer";

const ContactUs = () => {

    const form = useForm();
    const { handleSubmit, formState: { errors }, setError } = form;

    const onSubmitContactUsForm = (data) => {
        let submitContactUsFormDto = {
            "subject": data.subject,
            "email": data.email,
            "message": data.message
        }
        console.log("data: " );
        submitContactUsForm(submitContactUsFormDto).then(response => {
            if (!response || !response.ok) {
                return;
            }
            //PRIKAZI PORUKU DA JE MEJL POSLAT
        })
    }


    return <div id="contact-us-container">

        <span className="title">Let's work together!</span>

        <div className="card-box-section">
            <ContactUsCard imageSrc={"./images/email.png"} title={"Contact us"} description={"Reach out and let's start working together."} />
            <ContactUsCard imageSrc={"./images/idea.png"} title={"Challenge your idea"} description={"Tell us your idea and we will help make the most of it."} />
            <ContactUsCard imageSrc={"./images/develop-icon.jpeg"} title={"From idea to realization"} description={"Let's convert your idea into reality."} />

        </div>

        <div className="contact-us-section">
            <div className="form-container">
                <span className="title">Contact us</span>
                <span className="subtitle">Fill out this form and someone from our team will reach out as soon as possible.</span>
                <ContactUsData />
                <ContactUsForm errors={errors} form={form} onSubmit={handleSubmit(onSubmitContactUsForm)} />
            </div>
            <div className="map-container">
                <MapContainer />
            </div>
        </div>

    </div>
}

export default ContactUs;