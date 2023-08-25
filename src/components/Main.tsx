import React from "react"
import {TextField} from "@material-ui/core";
import './components.css';

const Main = ({value, label}) => {
    return (
        <TextField id="filled-basic" label={label} variant="filled" className="Main" disabled={true} value={value} />
    );
};

export default Main;
