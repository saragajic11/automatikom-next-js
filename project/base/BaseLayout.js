import React, { useState } from 'react';
import { Alert, Snackbar } from "@mui/material";
import SnackbarContext from "../Context/SnackbarContext";
import Header from '../Components/Header';
import CarouselContainer from '../Components/CarouselContainer';
import AboutUs from '../Components/AboutUs';
import Team from '../Components/Team';
import ContactUs from '../Components/ContactUs';


const BaseLayout = (props) => {

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [messageSnackbar, setMessageSnackbar] = useState('');
    const [alertType, setAlertType] = useState('success');

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSnackbar(false);
    };

    const showMessage = (message, alertType = 'success') => {
        setAlertType(alertType)
        setMessageSnackbar(message)
        setShowSnackbar(true);
    }

    const value = { showMessage }

    return <div id="main-container">
        <Header />
        <CarouselContainer />
        <AboutUs />
        <Team />
        <ContactUs />

    </div>
};

export default BaseLayout;
