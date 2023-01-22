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
        setDay(1);
    }
    else {
        setMonth(month-1);
        setDay(1);
    }

   }

   // Create the calendar boxes view

   const CalendarBoxView = () => {

    let storeBoxes: Array<Object> = new Array();
    let lastId: number = -1;

    const selectBox = (e: any) => {
        let temp: Array<Object> = new Array();
        let currentId: number = Number(e.currentTarget.id);

        if (lastId !== -1) {
            storeBoxes.splice(lastId-1,1,<div onClick={selectBox} className="box" id={lastId.toString()}><p className="textBox">{lastId}</p></div>);
        }
        else {
            storeBoxes.splice(day-1,1,<div onClick={selectBox} className="box" id={day.toString()}><p className="textBox">{day}</p></div>);
        }
        setDay(currentId);
        storeBoxes.splice(currentId-1,1,<div onClick={selectBox} className="selectedBox" id={currentId.toString()}><p className="textBox">{currentId}</p></div>);
        storeBoxes.forEach(function(item){
            temp.push(item);
        });
        lastId = currentId;
        }
    
    for(let i = 1; i <= getDaysInMonth(year, month); i++){

        if (i === day) {
            storeBoxes.push(<div onClick={selectBox} className="todayBox" id={(i).toString()} ><p className="textBox">{i}</p></div>)
        }
        else {
            storeBoxes.push(<div onClick={selectBox} className="box" id={(i).toString()}><p className="textBox">{i}</p></div>)
        }
    }

    return (<><div className="calendarBox">
        <button className="decreaseDayButton" onClick={decreaseDayTime}>{"<"}</button>
        <button className="decreaseMonthButton" onClick={decreaseMonthTime}>{"<<"}</button>
        <div className="month">
            <p id="month">{monthsList.get(month)}</p>
        </div>
        <p className="date">{day} {month} {year}</p>
        <button className="increaseMonthButton" onClick={increaseMonthTime}>{">>"}</button>
        <button className="increaseDayButton" onClick={increaseDayTime}>{">"}</button><br />
        <div className="weekDays">
            <div id="week-mon">Mon</div>
            <div id="week-tue">Tue</div>
            <div id="week-wed">Wed</div>
            <div id="week-thu">Thu</div>
            <div id="week-fri">Fri</div>
            <div id="week-sat">Sat</div>
            <div id="week-sun">Sun</div>
        </div>
        {Object.assign(storeBoxes)}
        </div></>);
        

   }

    return <>
        
        
       
        
        {CalendarBoxView()}
        

    </>
}