import React from "react";
import { RegisterTemplate } from "../../components/templates";

const Register = ({ tokenHeader }) => {
    return (
        <> 
            <RegisterTemplate tokenHeader={ tokenHeader }/>
        </>
    );
}

export default Register;