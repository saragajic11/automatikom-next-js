import { CircularProgress, LinearProgress } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { Axios } from '../base/HTTP';
import LoaderContext from "../context/LoaderContext";

const LoaderWrapper = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [loadingManual, setLoadingManual] = useState(false);
    const countRef = useRef(0)

    const value = { loading: loadingManual, setLoading: setLoadingManual };

    useEffect(() => {
        console.log("Loading M: ", loadingManual);
    }, [loadingManual]);

    useEffect(() => {
        console.log("Loading: ", loading);
    }, [loading]);

    useEffect(() => {
        console.log("Eve me", loading);
        if (countRef.current <= 0 || !loading) {
            console.log("eve me 2");
            countRef.current = 0;
            setLoading(false);
        }
    }, [countRef.current, loading])

    Axios.getInstance().interceptors.response.use(response => {
        countRef.current = countRef.current - 1;
        if (countRef.current <= 0) {
            setLoading(v => false);
        }
        return response;
    });
    Axios.getInstance().interceptors.request.use(request => {
        countRef.current = countRef.current + 1;
        setLoading(v => true);
        return request;
    });

    return <LoaderContext.Provider value={value}>
        {(loading || loadingManual) &&
            <div className="loader">
                <LinearProgress className="linear-loader" />
                <div className="circular-loader">
                    <CircularProgress size={80} />
                </div>
            </div>
        }
        {children}
    </LoaderContext.Provider>
}

export default LoaderWrapper;