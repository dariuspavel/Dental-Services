import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CalendarView } from "./Calendar"
import "../css/SignInPage.css"
import { useState } from "react";


export const SignInPageView = () => {
    
    const navigate = useNavigate();
    const cookies = new Cookies();

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
        setDisplayProgram(temp);
    }

    let currentDate = new Date();

    for (let i = 0; i < 14; i++) {
        // if (currentDate.getHours() > 8 && currentDate.getHours() < 22) {
        // if (currentDate.getHours() < 7 && currentDate.getHours() < 22) {
        //     if ( > currentDate.getHours()) {
        //         // workProgram.push(<p className={"unavailableProgram"} id={i.toString()}>{(i+8)+":00"}</p>);
        //         workProgram.push(<p onClick={createAppointment} className={"validProgram"} id={i.toString()}>{(i+8)+":00"}</p>);
        //     }
        //     else {
        //         workProgram.push(<p className={"unavailableProgram"} id={i.toString()}>{(i+8)+":00"}</p>);
        //     }
        // }
        

        if (currentDate.getHours() > 7 && currentDate.getHours() < 22) {

            if (i > currentDate.getHours()) {
                workProgram.push(<p onClick={createAppointment} className={"validProgram"} id={i.toString()}>{(i+8)+":00"}</p>);
            }
            else {
                workProgram.push(<p className={"unavailableProgram"} id={i.toString()}>{(i+8)+":00"}</p>);
            }
        }
        else {
            workProgram.push(<p className={"unavailableProgram"} id={i.toString()}>{(i+8)+":00"}</p>);
        }
    }

    
 
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
