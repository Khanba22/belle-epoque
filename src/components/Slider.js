import React from 'react'
import styles from "../stylesheets/Slider.module.scss"
import styles2 from "../stylesheets/OurCustomers.module.css"
import logo1 from "../assets/logos/bmw-logo.svg"
import logo2 from "../assets/logos/beccos-logo.svg";
import logo3 from "../assets/logos/avis-gym-logo.svg";
import logo4 from "../assets/logos/gandhe-logo.svg";
import logo5 from "../assets/logos/haldiram-nagpur-seeklogo.com.svg";
import logo6 from "../assets/logos/honda-logo.svg";
import logo7 from "../assets/logos/impulse-logo.svg";
import logo8 from "../assets/logos/jawed-habib-logo.jpg";
import logo9 from "../assets/logos/karma-logo.svg";
import logo10 from "../assets/logos/lush-house-logo.jpg";
// import logo11 from "../assets/logos/mt-ram-bhandar-logo.svg";
// import logo12 from "../assets/logos/ram-bhandar-logo.svg";
import logo13 from "../assets/logos/raskunj-logo.jpg";
import logo14 from "../assets/logos/raskunj-logo.png";
import logo15 from "../assets/logos/sankalp-logo.jpg";
// import logo16 from "../assets/logos/serendipity-logo.svg";
import logo17 from "../assets/logos/shabana-bakery-logo.jpg";
import logo18 from "../assets/logos/traumacon-logo.png";
import logo19 from "../assets/logos/veena-world-logo.jpg";
// import logo20 from "../assets/logos/vishal-ethnic-logo.svg";
import logo21 from "../assets/logos/vr-nagpur-logo.jpg";
import { Link } from 'react-router-dom';
const arr2 = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo13,logo14,logo15,logo17,logo18,logo19,logo21,logo10,logo15,logo13,logo14,logo17,logo1]
// Repeat the logos again if the slider animation breaks in between

function Slider() {
    return (
        <>
            <div className={styles.slider}>
            <h1 className={styles2.partnerHeading}>Our Partners</h1>
            <div className={styles.slidetrack}>
                {arr2.map(el => {
                    return (
                        <div key={Math.random()*200000} className={styles.slide}>
                            <img src={el} style={{height:"150px",width:"150px"}} alt="" />
                        </div>
                    )
                })}
            </div>
            {window.innerWidth > 650 && <div className={styles.slidetrackRev}>
                {arr2.map(el => {
                    return (
                        <div key={Math.random()*200000} className={styles.slide}>
                            <img src={el} style={{height:"150px",width:"150px"}} alt="" />
                        </div>
                    )
                })}
            </div>}
        </div>
        <div className={styles2.floatingText}>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <button><Link to = "/contact">Contact Us</Link></button>
        </div>
        </>
    )
}

export default Slider
