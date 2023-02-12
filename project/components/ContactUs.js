import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ValidationPatters from "../constants/ValidationPatterns";
import ContactUsData from "./ContactUsData";
import ContactUsForm from "./ContactUsForm";
import MapContainer from "./MapContainer";

const ContactUs = ({ setLoading, showMessage }) => {

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

    const recaptchaRef = useRef(null);
    const [captchaCode, setCaptchaCode] = useState(null);

    const form = useForm();
    const { handleSubmit, formState: { errors }, setError } = form;

    const onSubmitContactUsForm = (data) => {
        setLoading(true);
        data = { ...data, captchaCode: captchaCode }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200 || res.status === 250) {
                showMessage("Uspešno poslat mejl", "success");
                recaptchaRef.current.reset();
            } else if (res.status === 422) {
                showMessage("Molimo potvrdite da niste robot", "error");
            }
            setLoading(false);
            recaptchaRef.current.reset();
        }).catch(error => {
            resolve();
            setLoading(false);
            showMessage("Došlo je do greške. Molimo proverite podatke i pokušajte ponovo.", "error");
            recaptchaRef.current.reset();

        });
    }

    const onReCAPTCHAChange = (captchaCode) => {
        setCaptchaCode(captchaCode);
    }

    return <div id="contact-us-container">

        <span className="title">Hajde da radimo zajedno!</span>

        <div className="contact-us-section">
            <div className="form-container">
                <span className="title">Kontaktirajte nas</span>
                <span className="subtitle">Popunite formu, i neko iz tima će Vas ubrzo kontaktirati.</span>
                <ContactUsData />
                <ContactUsForm formRules={formRules} errors={errors} form={form} onSubmit={handleSubmit(onSubmitContactUsForm)} onReCAPTCHAChange={onReCAPTCHAChange} recaptchaRef={recaptchaRef} />
            </div>
            <div className="map-container">
                <MapContainer />
            </div>
        </div>

    </div>
}

export default ContactUs;