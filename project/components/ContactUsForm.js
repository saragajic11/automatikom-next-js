import { Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import TextFieldControl from "./Controls/TextFieldControl";

const ContactUsForm = ({
    onSubmit,
    form,
    errors,
    formRules
}) => {

    return <FormProvider {...form} >
        <form id="contact-us-form" className="contact-us-form-container" onSubmit={onSubmit}>
            <TextFieldControl
                name="subject"
                defaultValue=""
                fullWidth
                margin="normal"
                placeholder="Subject"
                rules={formRules['subject']}
                error={Boolean(errors.subject)}
                helperText={errors.subject && "Obavezno polje"} />

            <TextFieldControl
                name="email"
                defaultValue=""
                fullWidth
                margin="normal"
                placeholder="Your email address"
                rules={formRules['email']}
                error={Boolean(errors.email)}
                helperText={errors.email && "Email nije validan"} />

            <TextFieldControl
                name="message"
                defaultValue=""
                fullWidth
                margin="normal"
                placeholder="Your message"
                multiline={true}
                minRows={5}
                maxLength={5000}
                rules={formRules['message']}
                error={Boolean(errors.message)}
                helperText={errors.message && "Obavezno polje"}
                 />

            <Button className="submit-btn" type={'submit'}>
                Send message
            </Button>
        </form>
    </FormProvider>
}

export default ContactUsForm;