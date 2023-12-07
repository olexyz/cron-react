import React from "react"
import './components.css';
import {TextField} from "@mui/material";

const Main = ({value, label}: any) => {
    return (
        <TextField id="filled-basic" label={label} variant="filled" className="Main" disabled={true} value={value} />
    );
};

export default Main;
