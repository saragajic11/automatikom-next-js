import { createContext } from "react";

const SnackbarContext = createContext({
    showMessage: () => { console.log("Ojala") }
});

export default SnackbarContext;