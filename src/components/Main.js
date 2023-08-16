import React from "react"
import {TextField} from "@material-ui/core";
import './components.css';

const Main = ({value}) => {
    return (
        <TextField id="filled-basic" label="Крон" variant="filled" className="Main" disabled={true} value={value} />
    );
};

export default Main;
