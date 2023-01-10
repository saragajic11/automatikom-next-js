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
                name="name"
                defaultValue=""
                fullWidth
                margin="normal"
                placeholder="Your name" />

            <TextFieldControl
                name="email"
                defaultValue=""
                fullWidth
                margin="normal"
                placeholder="Your email address" />

            <TextFieldControl
                name="message"
                defaultValue=""
                fullWidth
                margin="normal"
                placeholder="Your message"
                multiline={true}
                minRows={5}
                maxLength={5000} />

            <Button className="submit-btn" type={'submit'}>
                Send message
            </Button>
        </form>
    </FormProvider>
}

export default ContactUsForm;