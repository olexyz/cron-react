export interface cronObject {
    startMinute: number;
    startHour: number;
    daysOfMonth: Array<number>;
    daysStep: number;
    allDays: boolean;
    months: Array<number>;
    monthsStep: number;
    allMonths: boolean;
    daysOfWeek: Array<number>;
    numberWeek: number | string;
    allWeek: boolean;
    yearsStep: number;
    allYears: boolean;
}
