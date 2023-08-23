import React, {useState} from "react"
import './components.css';
import {Tab, Tabs} from "@mui/material";

const CronTabs = ({change}) => {
    const navItems = ['Ежедневно', 'Еженедельно', 'Ежемесячно', 'Ежегодно'];
    let [value, setValue] = useState(navItems[1])
    const selectTab = (newValue)=>{
        let _val = newValue
        setValue(_val)
        change(_val)
    }
    return (
            <Tabs
                value={value}
                onChange={(e, value) => {
                    selectTab(value);
                }}
            >
                <Tab
                    value={navItems[0]}
                    label={navItems[0]}
                />
                <Tab value={navItems[1]}
                     label={navItems[1]} />
                <Tab value={navItems[2]}
                     label={navItems[2]} />
                <Tab value={navItems[3]}
                     label={navItems[3]} />
            </Tabs>
    );
};

export default CronTabs;
