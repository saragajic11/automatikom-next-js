import { useState } from "react";
import SnackbarContext from "../context/SnackbarContext";
import {Alert, Snackbar} from "@mui/material";

const SnackbarWrapper = ({ children }) => {

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [messageSnackbar, setMessageSnackbar] = useState('');
    const [alertType, setAlertType] = useState('success');

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setShowSnackbar(false);
    }

    const showMessage = (message, alertType = 'success') => {
        setAlertType(alertType)
        setMessageSnackbar(message)
        setShowSnackbar(true);
    }

    const value = {showMessage}

    return <SnackbarContext.Provider value={value}>
        <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
            <Alert severity={alertType} onClose={handleCloseSnackbar}>
                {messageSnackbar}
            </Alert>
        </Snackbar>

        {children}

    </SnackbarContext.Provider>
}

export default SnackbarWrapper;