import React, {useState} from "react"
import './components.css';
import {Box, Checkbox, FormControlLabel} from "@mui/material";
import {useRepeatStore} from "../core/store.tsx";
const weekdays = [
    {name:'Пн', longname: 'Понедельник', key:1},
    {name:'Вт', longname: 'Вторник', key:2},
    {name:'Ср', longname: 'Среда', key:3},
    {name:'Чт', longname: 'Четверг', key:4},
    {name:'Пт', longname: 'Пятница', key:5},
    {name:'Сб', longname: 'Суббота', key:6},
    {name:'Вс', longname: 'Воскресенье', key:7}
];
const Weekly = () => {
    const setWeek = useRepeatStore(state=>state.setWeek)
    let [week, _setWeek] = useState(new Array(weekdays.length).fill(true))

    const selectWeek = (position)=>{
        const updatedCheckedWeek = week.map((item, index) => {
                return index === position ? !item : item
            }
        );
        _setWeek(updatedCheckedWeek);
        setWeek(updatedCheckedWeek);
    }
    return (
            <Box sx={{ display: 'flex' }}>
                {
                    weekdays.map((el, index)=>{
                        return <FormControlLabel sx={{ m: 3 }} control={<Checkbox checked={week[index]} onChange={()=>selectWeek(index)}/>} label={el.name} key={el.key}/>
                    })
                }
            </Box>
    );
};

export default Weekly;
