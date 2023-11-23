import React from "react"
import './components.css';
import {Tab, Tabs} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Weekly from "./Weekly.tsx";
import {useRepeatStore} from "../core/store.tsx";
import Daily from "./Daily.tsx";

const CronTabs = () => {
    const selectTab = useRepeatStore(state=>state.setRepeat)
    let value = useRepeatStore(state => state.repeat)
    let navItems = useRepeatStore(state => state.repeats)
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
            <TabPanel value={navItems[0].key} key={navItems[0].key}><Daily></Daily></TabPanel>
            <TabPanel value={navItems[1].key} key={navItems[1].key}><Weekly></Weekly></TabPanel>
            <TabPanel value={navItems[2].key} key={navItems[2].key}>Ежемесячно</TabPanel>
        </TabContext>
    );
};

export default CronTabs;
