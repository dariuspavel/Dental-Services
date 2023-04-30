import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CalendarView, getSelectedDay, getSelectedMonth, getSelectedYear } from "./Calendar"
import "../css/SignInPage.css"
import { useState } from "react";
import { getAppointment, saveAppointment } from "../api/BackendApi";
import { CustomerHistory } from "../Interface/History";


export const SignInPageView = () => {
    
    const navigate = useNavigate();
    const cookies = new Cookies();
    const currentDate = new Date();

    var workProgram: Array<Object> = new Array();
    const [displayProgram, setDisplayProgram] = useState<Array<Object>>(workProgram);

    const handleSignout = () => {
        cookies.set("id", "");
        navigate("/");
        window.location.reload();
    }

    const createAppointment = (e: any) => {
        let temp: Array<Object> = new Array();
        let currentId: number = Number(e.currentTarget.id);
        workProgram.splice(currentId,1, <p onClick={createAppointment} className={"invalidProgram"} id={currentId.toString()}>{(currentId+8)+":00"}</p>);
        workProgram.forEach(function(item){
            temp.push(item);
        });
        async function doRequest() {

            try {
                let addAppmntToHistory: CustomerHistory = {
                    date: currentDate.toDateString(),
                    hour: currentDate.toLocaleTimeString(),
                    doctor: "Doc", 
                    reason: "Simple check"
                    }
                await saveAppointment(addAppmntToHistory);
            } catch  {
                console.log("Cannot create history");
            }
        }
        doRequest();
        setDisplayProgram(temp);
    }

    const handleAppointment = async () => {
        const result = await getAppointment(1);
        if (!result.ok) {
            // setMessage("Invalid username or password")
        }

        const body = await result.json();
        if (body.length > 0) {

            const appointment = body[0];
            let fullDate: Date = new Date(getSelectedYear, getSelectedMonth-1, getSelectedDay);
            let strgFullDate: string = fullDate.toDateString();
            if (strgFullDate === appointment.date) {
                workProgram.push(<p className={"invalidProgram"}>{"10:00"}</p>);
                
            }
        } else {
            // setMessage("Invalid username or password");
        }
    }

    for (let i = 0; i < 14; i++) {
        if (currentDate.getHours() > 7 && currentDate.getHours() < 24) {
            if (i > (currentDate.getHours())-8) {
                workProgram.push(<p onClick={createAppointment} className={"validProgram"} id={i.toString()}>{(i+8)+":00"}</p>);
            }
            else {
                workProgram.push(<p className={"unavailableProgram"}>{(i+8)+":00"}</p>);
            }
        }
        else {
            // workProgram.push(<p className={"unavailableProgram"}>{(i+8)+":00"}</p>);
        }
    }
 
    handleAppointment();

    return <>
        <button className='signoutButton' onClick={handleSignout}> Sign out </button>
        {CalendarView()}
        <div className="displayProgram">

            <div>
                <img src="https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=" alt="" className="profileImg" />
            </div>

            <div className="workProgram">
                <div className="hourInterval">
                    {Object.assign(displayProgram)}
                </div>
            </div>

        </div>
    

    </>
}
