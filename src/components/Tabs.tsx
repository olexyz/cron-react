import React, {useState} from "react"
import './components.css';
import {Tab, Tabs} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Weekly from "./Weekly.tsx";
export interface repeat {
    name: string,
    key: string
}
const CronTabs = ({change}) => {
    const navItems: repeat[] = [{name:'Ежедневно', key:'daily'}, {name:'Еженедельно', key:'weekly'}, {name:'Ежемесячно', key:'monthly'}, {name:'Ежегодно', key:'yearly'}];
    let [value, setValue] = useState(navItems[0].key)
    const selectTab = (newValue)=>{
        let _val = newValue
        setValue(_val)
        change(_val)
    }
    return (
        <TabContext value={value}>
            <Tabs
                value={value}
                onChange={(e, value) => {
                    selectTab(value);
                }}
            >
                {
                    navItems.map((el)=>{
                        return <Tab
                            value={el.key}
                            label={el.name}
                            key={el.key}
                        />
                    })
                }
            </Tabs>
            <TabPanel value={navItems[0].key} key={navItems[0].key}>Ежедневно</TabPanel>
            <TabPanel value={navItems[1].key} key={navItems[1].key}><Weekly></Weekly></TabPanel>
            <TabPanel value={navItems[2].key} key={navItems[2].key}>Ежемесячно</TabPanel>
            <TabPanel value={navItems[3].key} key={navItems[3].key}>Ежегодно</TabPanel>
        </TabContext>
    );
};

export default CronTabs;
