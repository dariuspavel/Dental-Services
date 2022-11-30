import { useState } from "react"
import "../css/Calendar.css"


export const CalendarView = () => {

    const currentTime = new Date();
    const monthsList = new Map<number, string>([
        [1, "January"],
        [2, "February"],
        [3, "March"],
        [4, "April"],
        [5, "May"],
        [6, "June"],
        [7, "July"],
        [8, "August"],
        [9, "September"],
        [10, "October"],
        [11, "November"],
        [12, "December"]
    ]);

    const getDaysInMonth = (year:number, month:number) => {
        return new Date(year, month, 0).getDate();
    }

    const [day, setDay] = useState(currentTime.getDate());
    const [month, setMonth] = useState(currentTime.getMonth()+1);
    const [year, setYear] = useState(currentTime.getFullYear());

    // Increase time when the button is pressed
   const increaseDayTime = () => {

    if(day === getDaysInMonth(year, month) && month === 12){
        setYear(year+1);
        setMonth(1);
        setDay(1);
    }
    else if (day === getDaysInMonth(year, month)) {
        setMonth(month+1);
        setDay(1);
    }
    else if (day < getDaysInMonth(year,month)) {
        setDay(day+1);
    }

   }

   // Decrease time when the button is pressed
   const decreaseDayTime = () => {

    if(day === 1 && month === 1){
        setYear(year-1);
        setMonth(12);
        setDay(getDaysInMonth(year,month));
    }
    else if (day === 1) {
        setMonth(month-1);
        console.log(month);
        console.log(getDaysInMonth(year, month));
        setDay(getDaysInMonth(year,month-1));
    }
    else if (day > 1) {
        setDay(day-1);
    }
    
   }

   const increaseMonthTime = () => {

    if (month === 12) {
        setYear(year+1);
        setMonth(1);
        setDay(1)
    }
    else {
        setMonth(month+1);
        setDay(1);
    }

   }

   const decreaseMonthTime = () => {

    if (month === 1) {
        setYear(year-1);
        setMonth(12);
        setDay(1)
    }
    else {
        setMonth(month-1);
        setDay(1);
    }

   }

   // Create the calendar boxes view

   const calendarBoxView = () => {

    let storeBoxes: Array<object> = new Array();
    
    for(let i = 0; i < getDaysInMonth(year, month); i++){
        storeBoxes.push(<div className="box"><p className="textBox">{i+1}</p></div>)
    }
    return (<><div className="calendarBox">
        <button className="decreaseDayButton" onClick={decreaseDayTime}>{"<"}</button>
        <button className="decreaseMonthButton" onClick={decreaseMonthTime}>{"<<"}</button>
        <div className="month">
            <p id="month">{monthsList.get(month)}</p>
        </div>
        <button className="increaseMonthButton" onClick={increaseMonthTime}>{">>"}</button>
        <button className="increaseDayButton" onClick={increaseDayTime}>{">"}</button><br />
        {Object.assign(storeBoxes)}</div></>);

   }

    return <>
        
        <p>{day} {month} {year}</p>
       

        {calendarBoxView()}
        

    </>
}