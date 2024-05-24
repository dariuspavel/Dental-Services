import React from 'react';
import { Cookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import "../css/HomePage.css"
import { CalendarView } from './Calendar';
import { SignInPageView } from './SignInPage';
import { useTokenState } from './TokenContext';
import Footer from '../footer/footer';
import clinic_room from "../images/clinic_room.jpeg";
import doctor_1 from "../images/doctor_1.jpeg";
import doctor_2 from "../images/doctor_2.jpeg";
import doctor_3 from "../images/doctor_3.jpeg";
import doctor_4 from "../images/doctor_4.jpeg";
import doctor_5 from "../images/doctor_5.jpeg";
import dental_cleaning from "../images/dental_cleaning.png";
import dental_implant from "../images/dental_implant.png";
import dental_restoration from "../images/dental_restoration.png";
import Header from '../header/header';


export const HomePageView = () => {


    const navigate = useNavigate();
    const cookies = new Cookies();
    const id = cookies.get("id");

    

    
    
    const Logged = () => {
        

        if (id) {
            return<>
            {SignInPageView()}
        </>
        } else {
            return<>
            
        </>
        }

    }

    

    return<>
        <Header/>
        {Logged()}

        <head>
            <title>Dental Services</title>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        </head>

        <body>
            <section className='home' id='home'>
                <div className="content">
                    <h3>make your smile shine</h3>
                    <p>Booking your dental appointment online has never been easier! Our user-friendly system allows you to schedule a visit at your convenience, anytime and anywhere. 
                        Simply select your desired service, choose a date and time, and receive instant confirmation. 
                        Experience the convenience of managing your dental care with just a few clicks. 
                        Schedule your appointment online today for a healthier smile tomorrow!</p>
                    <a href="#" className='btn'>make appointment</a>
                </div>
            </section>

            <section className='about' id='about'>
                <h1 className="heading"> about us </h1>
                <div className="row">
                    <div className="image">
                        <img src={clinic_room} alt="" />
                    </div>

                    <div className="content">
                        <h3>our clinic is made for you</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nas</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nas</p>
                        <a href="" className='btn'>read more</a>
                    </div>
                </div>
            </section>

            <section className="services" id='services'>
                <h1 className='heading'> our services</h1>
                <div className="box-container">
                    <div className="box">
                        <img src={dental_cleaning} alt=""/>
                        <h3>Dental Cleaning</h3>
                        <p>Our professional dental cleaning service provides a thorough and gentle cleaning of your teeth.
                             Using advanced tools and techniques, we remove plaque, tartar, and stains, ensuring your teeth are healthy and sparkling. 
                            Our skilled hygienists focus on maintaining your oral health, preventing cavities, and promoting overall well-being</p>
                    </div>

                    <div className="box">
                        <img src={dental_implant} alt=""/>
                        <h3>Dental Implant</h3>
                        <p>Our dental implant service offers a permanent solution for missing teeth.
                        Using advanced technology, our skilled professionals implant a titanium post into the jawbone, which supports a natural-looking artificial tooth. 
                        This durable and long-lasting option helps maintain bone structure and enhances your smile.
                        </p>
                    </div>

                    <div className="box">
                        <img src={dental_restoration} alt=""/>
                        <h3>Tooth Restoration</h3>
                        <p>Our dental restoration service specializes in repairing and restoring damaged or decayed teeth to their natural beauty and function.
                             Using the latest materials and techniques, our skilled professionals provide fillings, crowns, bridges, and veneers tailored to your needs.</p>
                    </div>
                </div>
            </section>

            <section className="team" id='team'>
                <h1 className="heading"> out team</h1>
                <div className="swiper team-slider">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={doctor_1} alt="" />
                            </div>
                            <div className="content">
                                <h3>Wilson Morales</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={doctor_2} alt="" />
                            </div>
                            <div className="content">
                                <h3>Dixon Arnold</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={doctor_3} alt="" />
                            </div>
                            <div className="content">
                                <h3>Jamie Hatfield</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>
                        
                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={doctor_4} alt="" />
                            </div>
                            <div className="content">
                                <h3>Katherine Rowe</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="image">
                                <img src={doctor_5} alt=""/>
                            </div>
                            <div className="content">
                                <h3>Melanie Combs</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <script src="../animation/HomePage.js"></script> */}
            <script src='src/animation/HomePage.js'></script>
            <script src='https://unpkg.com/swiper@7/swiper-bundle.min.js'></script>
        </body>


        <Footer/>

    </>
}