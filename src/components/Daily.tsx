import React from "react"
import './components.css';
import {Box, TextField} from "@mui/material";
import {useRepeatStore} from "../core/store";
import {cronObject} from "../core/interfaces";
const Daily = () => {
    const setDay = useRepeatStore((state: cronObject)=>state.setDay);
    const dayStep = useRepeatStore((state: cronObject)=>state.daysStep);

    return (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <span>Каждый</span><TextField id="outlined-basic" variant="outlined" type="number" value={dayStep} onChange={(event) => setDay(Number(event.target.value))} InputProps={{ inputProps: { min: 1, max: 30 } }} /><span>день</span>
            </Box>
    );
};

export default Daily;
