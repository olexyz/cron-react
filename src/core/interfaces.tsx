export interface cronObject {
    repeat: string,
    repeats: Array<repeat>;
    startMinute: number;
    startHour: number;
    daysOfMonth: Array<number>;
    daysStep: number;
    daysOfWeek: Array<number>;
    months: Array<number>;
    monthsStep: number;
    numberWeek: number | string;
    yearsStep: number;
    setRepeat: (newRepeat: string)=>void,
    setWeek: (newWeek: any[])=>void,
    name: string,
    cron: string
}

export interface RepeatState {
    repeat: string,
    selectRepeat: (newRepeat: string)=>void
}

export interface repeat {
    name: string,
    key: string
}
