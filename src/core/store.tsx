import {create} from "zustand";
import {cronObject, repeat} from "./interfaces";

export const useRepeatStore = create<cronObject>((set: any, get: any)=>({
    repeats: [{name:'Ежедневно', key:'allDays'}, {name:'Еженедельно', key:'allWeek'}, {name:'Ежемесячно', key:'allMonth'}],
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
    setRepeat: (newRepeat) => {
        set({ repeat: newRepeat })
        set({ name: get().repeats.find((el: repeat)=>el.key===newRepeat).name })
    },
    setDay: (newDayStep: number) => {
        let _cron = get().cron.split(' ');
        _cron[2] = newDayStep===1?'*':newDayStep.toString();
        set({ daysStep: newDayStep });
        set({ cron: _cron.join(' ')});
    },
    setWeek: (newWeek:any[]) => {
        let _newWeekName: any[]= [];
        const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'cб', 'вс'];
        let days: any[] = [];
        newWeek.forEach((el,i)=>{
            if(el) {
                _newWeekName.push(week[i])
                days.push(i);
            }
        });
        let _cron = get().cron.split(' ');
        _cron[5] = days.length!==7?days.join(','):'*';
        set({daysOfWeek: days});
        set({ name: 'Еженедельно'+(days.length!==7?', по '+ _newWeekName.join(','):'') })
        set({ cron: _cron.join(' ')})
    },
}))
