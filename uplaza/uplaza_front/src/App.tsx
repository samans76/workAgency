import {Navigate, useRoutes} from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import {CssBaseline} from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import {useEffect} from "react";
import ProtectedPage from "./components/Auth/ProtectedPage";
import {toast, ToastContainer} from "react-toastify";
import axios from "axios";
import {ApiUrl} from "./config";

function App() {

    const content = useRoutes(router);




    useEffect(()=>{
    },[])
    return (
        <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline/>
                <ToastContainer/>
                {/*<ProtectedPage/>*/}
                {content}
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
