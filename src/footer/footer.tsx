import React from "react";
import './footer.css';

const Footer=() => {
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>For Business</h4>
                        <a href="">
                            <p>Services</p>
                        </a>
                        <a href="">
                            <p>Health Plan</p>
                        </a>
                        <a href="">
                            <p>Schedule</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div" id="sb_footer-links_div_align_center">
                        <h4>Resources</h4>
                        <a href="">
                            <p>tbs</p>
                        </a>
                        <a href="">
                            <p>tbs</p>
                        </a>
                        <a href="">
                            <p>tbs</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div" id="sb_footer-links_div_align_center">
                        <h4>Contact</h4>
                            <p>Strada 1 Decembrie 1989</p>
                            <p>Cartiere: Piata Crucii, Stadion, Buziasului</p>
                            <p>nr. 1-21; 2-24
                               Codul postal: 300231
                               Oficiu Postal: Timişoara 5
                            </p>
                    </div>

                    <div className="sb_footer-links_div" id="sb_footer-links_div_align_left">
                        <h4>Company</h4>
                        <a href="#about">
                            <p>About</p>
                        </a>
                        <a href="#services">
                            <p>Services</p>
                        </a>
                        <a href="#team">
                            <p>Team</p>
                        </a>
                    </div>
                </div>

         <hr></hr>

         <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Dental Services. All right reserved.
                </p>
            </div>

            <div className="sb_footer-below-links">
                <a href="http://localhost:3000/terms&conditions"><div><p>Terms & Conditions</p></div></a>
                <a href="http://localhost:3000/privacy"><div><p>Privacy</p></div></a>
            </div>

         </div>

            </div>
        </div>

    )
}

export default Footer;