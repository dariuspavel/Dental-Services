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
                        <h4>Partners</h4>
                        <a href="">
                            <p>tbd</p>
                        </a>
                        <a href="">
                            <p>tbd</p>
                        </a>
                        <a href="">
                            <p>tbd</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div" id="sb_footer-links_div_align_left">
                        <h4>Company</h4>
                        <a href="">
                            <p>About</p>
                        </a>
                        <a href="">
                            <p>Team</p>
                        </a>
                        <a href="">
                            <p>Contact</p>
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
                <a href=""><div><p>Terms & Conditions</p></div></a>
                <a href=""><div><p>Privacy</p></div></a>
            </div>

         </div>

            </div>
        </div>

    )
}

export default Footer;