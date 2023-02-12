import { createContext } from "react";

const SnackbarContext = createContext({
    showMessage: () => { }
});

export default SnackbarContext;