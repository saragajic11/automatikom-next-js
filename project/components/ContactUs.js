import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ValidationPatters from "../constants/ValidationPatterns";
import ContactUsData from "./ContactUsData";
import ContactUsForm from "./ContactUsForm";
import MapContainer from "./MapContainer";
import { submitContactUsForm } from "../services/ContactService";

const ContactUs = ({ setLoading, showMessage }) => {
  const formRules = {
    email: {
      required: { value: true, message: "Ovo polje je obavezno" },
      pattern: {
        value: ValidationPatters.EMAIL,
        message: "Molimo unesite validan email",
      },
    },
    subject: {
      required: { value: true, message: "Ovo polje je obavezno" },
    },
    message: {
      required: { value: true, message: "Ovo polje je obavezno" },
    },
  };

  const recaptchaRef = useRef(null);
  const [captchaCode, setCaptchaCode] = useState(null);

  const form = useForm();
  const {
    handleSubmit,
    formState: { errors },
    setError,
  } = form;

  const onSubmitContactUsForm = (data) => {
    console.log("Cao sarita", data);
    setLoading(true);
    data = { ...data, captchaCode: captchaCode };
    const formData = new FormData();
    formData.append("your-email", data.email);
    formData.append("your-subject", data.subject);
    formData.append("your-message", data.message);

    if (data.captchaCode) {
      setLoading(true);
      submitContactUsForm(formData).then((response) => {
        if (!response || !response.ok) {
          setLoading(false);
          showMessage(
            "Došlo je do greške. Molimo proverite podatke i pokušajte ponovo.",
            "error"
          );
          return;
        } else {
          setLoading(false);
          showMessage("Uspešno poslat mejl", "success");
          setCaptchaCode(null);
          recaptchaRef.current.reset();
        }
      });
    } else {
      setLoading(false);
      showMessage("Molimo potvrdite da niste robot", "error");
    }
  };

  const onReCAPTCHAChange = (captchaCode) => {
    setCaptchaCode(captchaCode);
  };

  return (
    <div id="contact-us-container">
      <span className="title">Hajde da radimo zajedno!</span>

      <div className="contact-us-section">
        <div className="form-container">
          <span className="title">Kontaktirajte nas</span>
          <span className="subtitle">
            Popunite formu, i neko iz tima će Vas ubrzo kontaktirati.
          </span>
          <ContactUsData />
          <ContactUsForm
            formRules={formRules}
            errors={errors}
            form={form}
            onSubmit={handleSubmit(onSubmitContactUsForm)}
            onReCAPTCHAChange={onReCAPTCHAChange}
            recaptchaRef={recaptchaRef}
          />
        </div>
        <div className="map-container">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
