import "./Footer.css";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import logo2 from "../assets/japanese-food.png";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
function Footer() {
    return (
        <>
            <footer>

                {/* TOP */}
                <div className="footer-left">
                    <div className="logo">
                        <img src={logo2} alt="" />
                        <h2>JEEBAN FOODSHOP</h2>
                    </div>
                    <p>
                        In the new era of technology we look a in the future with certainty and pride to for our company and.
                    </p>
                    <div className="social-icon">
                        <a href="">
                            <div className="icon"><IoLogoTwitter /></div>
                        </a>
                        <a href="">
                            <div className="icon"><FaFacebookF /></div>
                        </a>
                        <a href="">
                            <div className="icon"><BsInstagram /></div>
                        </a>
                        <a href="">
                            <div className="icon"><FaGithub /></div>
                        </a>
                    </div>
                </div>

                {/* MIDDLE */}
                <div className="footer-middle">
                    <div className="middle-left">
                        <p className="para">Pages</p>
                        <div className="menu1">
                            <a className="list1" href="">Home</a>
                            <a className="list1" href="">About</a>
                            <a className="list1" href="">Menu</a>
                            <a className="list1" href="">Pricing</a>
                            <a className="list1" href="">Blog</a>
                            <a className="list1" href="">Contact</a>
                            <a className="list1" href="">Delivery</a>
                        </div>
                    </div><div className="middle-left">
                        <p className="para">Utility Pages</p>
                        <div className="menu1">
                            <a className="list1" href="">Start Here</a>
                            <a className="list1" href="">Styleguide</a>
                            <a className="list1" href="">Password Protected</a>
                            <a className="list1" href="">404 Not Found</a>
                            <a className="list1" href="">Licenses</a>
                            <a className="list1" href="">Changelog</a>
                            <a className="list1" href="">View More</a>
                        </div>
                    </div>


                </div>
                <div className="footer-right">
                    <p>Follow Us On Instagram</p>
                    <div className="images">
                        <div className="img-sec">
                            <div>
                                <img src={img1} alt="img1" />
                            </div>
                            <div>
                                <img src={img2} alt="img2" />
                            </div>
                        </div>
                        <div className="img-sec">
                            <div>
                                <img src={img3} alt="img3" />
                            </div>
                            <div>
                                <img src={img4} alt="img4" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;