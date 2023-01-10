import React from "react";
import {useLocation} from "react-router-dom";
import { checkPath} from "../route";
import {isUserLoggedIn} from "./OAuth";

const AuthWrapper = (props) => {
    const location = useLocation();
    const needAuth = checkPath(location.pathname);

    const checkPermission = () => {

        if (needAuth && !isUserLoggedIn()) {
            return '';
        }

        return props.children;
    }

    return checkPermission();
};

export default AuthWrapper;
