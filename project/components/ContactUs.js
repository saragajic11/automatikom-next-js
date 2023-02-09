import { createRef, useContext } from "react";
import { useForm } from "react-hook-form";
import ValidationPatters from "../constants/ValidationPatterns";
import { submitContactUsForm } from "../services/ContactService";
import ContactUsCard from "./ContactUsCard";
import ContactUsData from "./ContactUsData";
import ContactUsForm from "./ContactUsForm";
import MapContainer from "./MapContainer";
import { ReCAPTCHA } from "react-google-recaptcha";

const ContactUs = ({ setLoading }) => {

    const formRules = {
        'email': {
            required: { value: true, message: "Ovo polje je obavezno" },
            pattern: { value: ValidationPatters.EMAIL, message: "Molimo unesite validan email" }
        },
        'subject': {
            required: { value: true, message: "Ovo polje je obavezno" }
        },
        'message': {
            required: { value: true, message: "Ovo polje je obavezno" },
        }
    }

    const form = useForm();
    const { handleSubmit, formState: { errors }, setError } = form;
    const recaptchaRef = createRef();

    const onSubmitContactUsForm = (data) => {
        // submitContactUsForm(submitContactUsFormDto).then(response => {
        //     if (!response || !response.ok) {
        //         return;
        //     }
        //     //PRIKAZI PORUKU DA JE MEJL POSLAT
        // })
        setLoading(true);
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200 || res.status === 250) {

            }
            setLoading(false);
        }).catch(error => {
            res.json(error);
            res.status(405).end();
            resolve();
            setLoading(false);
        });
    }

    const onReCAPTCHAChange = (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        console.log(`Hey`);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
    }


    return <div id="contact-us-container">

        <span className="title">Hajde da radimo zajedno!</span>

        {/* <div className="card-box-section">
            <ContactUsCard imageSrc={"./images/email.png"} title={"Contact us"} description={"Reach out and let's start working together."} />
            <ContactUsCard imageSrc={"./images/idea.png"} title={"Challenge your idea"} description={"Tell us your idea and we will help make the most of it."} />
            <ContactUsCard imageSrc={"./images/develop-icon.jpeg"} title={"From idea to realization"} description={"Let's convert your idea into reality."} />

        </div> */}

        <div className="contact-us-section">
            <div className="form-container">
                <span className="title">Kontaktirajte nas</span>
                <span className="subtitle">Popunite formu, i neko iz tima će Vas ubrzo kontaktirati.</span>
                <ContactUsData />
                <ContactUsForm formRules={formRules} errors={errors} form={form} onSubmit={handleSubmit(onSubmitContactUsForm)} />
                {/* <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    size="normal"
                    onChange={onReCAPTCHAChange}
                /> */}
            </div>
            <div className="map-container">
                <MapContainer />
            </div>
        </div>

    </div>
}

export default ContactUs;