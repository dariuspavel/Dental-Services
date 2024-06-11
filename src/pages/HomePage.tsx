import React, { useState } from 'react';
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

    const [open, setOpen] = useState(false);
    const onClick = () => setOpen(true)

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
        <div onClick={onClick}>
            { open ? <SignInPageView/> : null }
        </div>

        <head>
            <title>Dental Services</title>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        </head>

        <body>
            <section className='home' id='home'>
                <div className="content">
                    <h3>make your smile shine</h3>
                    <p>Booking your dental appointment online has never been easier! Our user-friendly system allows you to schedule a visit at your convenience, anytime and anywhere. 
                        Simply select your desired service, choose a date and time, and receive instant confirmation. 
                        Experience the convenience of managing your dental care with just a few clicks. 
                        Schedule your appointment online today for a healthier smile tomorrow!</p>
                    <button className='btn' onClick={onClick}>make appointment</button>
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
                        <p>Welcome to Dental Services, your trusted partner in comprehensive dental care. Our mission is to provide top-quality dental treatments that cater to the diverse needs of our community.
                             Whether you're looking for routine check-ups, specialized treatments, or cosmetic procedures, Dental Services is dedicated to ensuring your oral health and enhancing your smile.</p>

                        <p><b>Who We Are: <br /></b>
                            Dental Services is a state-of-the-art dental clinic equipped with the latest technology and staffed by a team of highly skilled and experienced professionals. 
                            Our team is composed of dedicated dentists, hygienists, and support staff who are passionate about delivering personalized care to each patient.</p>
                        
                        <p><b>Our Commitment:<br /></b>
                        We believe that a healthy smile is a reflection of overall well-being. At Dental Services, we are committed to providing a comfortable, safe, and welcoming environment where patients of all ages can receive the best possible dental care.
                         Our approach is patient-centered, focusing on individual needs and preferences to ensure a positive experience.</p>

                        <p><b>Our Commitment:<br /></b>
                            Our wide range of services includes preventive care, restorative treatments, orthodontics, and cosmetic dentistry. From teeth cleaning and fillings to braces and veneers, we use advanced techniques and materials to achieve optimal results.
                            Our goal is to help you maintain healthy teeth and gums for a lifetime.</p>

                        <p><b>Why Choose Us:<br /></b>
                            <b>Expertise and Experience: <br /></b> Our team consists of highly qualified professionals with extensive experience in various fields of dentistry.
                            <b>Personalized Care: <br /></b> We tailor our treatments to meet the unique needs of each patient, ensuring personalized and effective care.
                            <b>Cutting-Edge Technology: <br /></b> We utilize the latest dental technology and techniques to provide high-quality services and ensure patient comfort.
                            <b>Patient Education: <br /></b> We believe in empowering our patients with knowledge about their oral health and the treatments they receive, fostering informed decision-making.</p>
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
                            <div className="team-image">
                                <img src={doctor_1} alt="" />
                            </div>
                            <div className="box">
                                <h3>Wilson Morales</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="team-image">
                                <img src={doctor_2} alt="" />
                            </div>
                            <div className="box">
                                <h3>Dixon Arnold</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="team-image">
                                <img src={doctor_3} alt="" />
                            </div>
                            <div className="box">
                                <h3>Jamie Hatfield</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>
                        
                        <div className="swiper-slide slide">
                            <div className="team-image">
                                <img src={doctor_4} alt="" />
                            </div>
                            <div className="box">
                                <h3>Katherine Rowe</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="team-image">
                                <img src={doctor_5} alt=""/>
                            </div>
                            <div className="box">
                                <h3>Melanie Combs</h3>
                                <span>Genral Surgeon</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <script src="../animation/HomePage.js"></script> */}
            <script src='src/animation/HomePage.js'></script>
        </body>


        <Footer/>

    </>
}