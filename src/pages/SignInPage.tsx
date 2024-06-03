import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CalendarView, getSelectedDate} from "./Calendar"
import "../css/SignInPage.css"
import { useState } from "react";

export let getSelectedHour: number;

export const SignInPageView = () => {
    
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleSignout = () => {
        cookies.set("id", "");
        navigate("/");
        window.location.reload();
    }

    return <>
        {/* <button className='signoutButton' onClick={handleSignout}> Sign out </button> */}
        <div className="box-singin">
            <section className="contact" id="contact">
                <h1 className="heading">make appointment</h1>
                <form action="">
                    <span>your name:</span>
                    <div className="inputBox">
                        <input type="text" placeholder="first name" />
                        <input type="text" placeholder="last name" />
                    </div>

                    <span>your email:</span>
                    <input type="email" placeholder="enter your emial" className="box" />

                    <span>your number:</span>
                    <input type="number" placeholder="enter your number" className="box" />

                    <span>appointment date:</span>
                    <input type="datetime-local" className="box" />

                    <input type="submit" value="order now" className="btn"/>
                </form>
            </section>
        </div>

    </>
}
