import React from 'react';
import {Navigate, Outlet, Route} from "react-router-dom";

function ProtectedPage() {
    const isAuth = localStorage.getItem("token")
    return(
            <>
                {!isAuth ? <Navigate to={"/login"}/>:<Outlet/>}
            </>
    )
}

export default ProtectedPage;