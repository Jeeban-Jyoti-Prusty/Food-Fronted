import "./WeProvide.css"
import eggrol from "../assets/egg roll.png"
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

function WeProvide() {
    return (
        <>
            <div className="main">
                <div className="image">
                    <img src={eggrol} alt="eggrol" />
                </div>
                <div className="content-box">
                    <h3>We provide healthy food for your family.</h3>
                    <p className="para1">Our story began with a vision to create a unique dining experience that merges fine dining,
                        exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture,
                        we aim to honor our local roots while infusing a global palate.
                    </p>
                    <p className="para2">At place, we believe that dining is not just about food, but also about the overall experience.
                        Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </p>
                    <button>More About Us</button>
                </div>
                <div className="contact-details">
                    <p className="pra0">Come and visit us</p>
                    <p className="praa"><FiPhone /> +917978171372
                    </p>
                    <p className="praa"><MdMailOutline /> jeebanjyotiprusty804@gmail.com
                    </p>
                    <p className="praa"><GrLocation />
                        Dakshinakurua,Dhamnagar,<br />Bhadrak,Odisha,756117
                    </p>
                </div>
            </div>
        </>
    )
}
export default WeProvide;