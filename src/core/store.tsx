import {create} from "zustand";
import {cronObject} from "./interfaces";

export const useRepeatStore = create<cronObject>((set, get)=>({
    repeats: [{name:'Ежедневно', key:'allDays'}, {name:'Еженедельно', key:'allWeek'}, {name:'Ежемесячно', key:'allMonth'}, {name:'Ежегодно', key:'allYear'}],
    repeat: 'allDays',
    startMinute: 0,
    startHour: 0,
    daysOfMonth: [],
    daysStep: 1,
    daysOfWeek: [1,2,3,4,5,6,7],
    months: [],
    monthsStep: 1,
    numberWeek: 0,
    yearsStep: 1,
    cron: '* * * * * *',
    name: 'Ежедневно',
    setRepeat: (newRepeat)=> {
        set({repeat: newRepeat})
        set({ name: get().repeats.find(el=>el.key===newRepeat).name })
    },
}))
