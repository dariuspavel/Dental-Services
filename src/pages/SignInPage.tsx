import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CalendarView, getSelectedDate} from "./Calendar"
import "../css/SignInPage.css"
import { useState } from "react";
import { getAppointment, saveAppointment } from "../api/BackendApi";
import { CustomerHistory } from "../Interface/History";

export let getSelectedHour: number;

export const SignInPageView = () => {
    
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleSignout = () => {
        cookies.set("id", "");
        navigate("/");
        window.location.reload();
    }

    const handleAppointment = async () => {
        const result = await getAppointment(cookies.get("id"));
        if (!result.ok) {
            // setMessage("Invalid username or password");
        }

        const body = await result.json();
        if (body.length > 0) {
            const id = body[0].id;
            
        

        } else {
            // setMessage("Invalid username or password");
        }
    }

    const createAppointment = () => {

        async function doRequest() {
            try {
                let newPerson: CustomerHistory = {
                    date: Number(getSelectedDate.getSelectedDay +""+ getSelectedDate.getSelectedMonth +""+ getSelectedDate.getSelectedYear),
                    hour: 1,
                    doctor: "test",
                    reason: "test"
                    }
                await saveAppointment(newPerson);
            } catch  {
                //console.log("User already exists");
            }
        }
        doRequest();
        navigate("/");
    }

    const displayAppointmentSubmit = () => {

        return <>

            <div className="submitAppointentPanel">

                <p>Do you want to make the appointment ?</p>
                <button onClick={handleAppointment}>Yes</button>
                <button>No</button>
                
            </div>
        
        </>
    }

    const getDateFromSelectedDay = () => {
        console.log("Day:" + getSelectedDate.getSelectedDay + "\n" + "Month:" + getSelectedDate.getSelectedMonth + "\n" + "Year:" + getSelectedDate.getSelectedYear);
        console.log(getSelectedDate.getSelectedDay +""+ getSelectedDate.getSelectedMonth +""+ getSelectedDate.getSelectedYear);
        return <>
         
        </> 
    }

    const displayWorkTime = () => {

        const startOfTheDay = 8;
        const endOfTheDay = 21;

        let workTimeView: any[] = [];

        for (let i = startOfTheDay; i <= endOfTheDay; i++) {
            workTimeView[i] = <div onClick={getDateFromSelectedDay} className="appointmentFree">{i+":00"}</div>;
        }
        
        return workTimeView;
    }

    const doctorScheduleLabel = (profileImg: string) => {

        return <>
            <div className="displayProgram">

                <div>
                    <img src={profileImg} alt="" className="profileImg" />
                </div>

                <div className="workProgram">
                    {displayWorkTime()}
                </div>

            </div>
        </>
    }


    return <>
        <button className='signoutButton' onClick={handleSignout}> Sign out </button>
        {CalendarView()}
        {doctorScheduleLabel("https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=")}    
        {displayAppointmentSubmit()}

    </>
}
