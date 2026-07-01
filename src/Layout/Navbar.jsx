import "./Navbar.css";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { IoLogoTwitter, IoTimeSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import logo from "../assets/japanese-food.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

function Navbar() {
    const [mobileViewOpen, setMobileViewOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = async () => {
        try {
            await axios.get(
                "https://food-backend-t28x.onrender.com/api/auth/logout",
                {
                    withCredentials: true,
                }
            );

            localStorage.removeItem("user");
            setMobileViewOpen(false)

            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const navigate = useNavigate();

    function closeMobileMenu() {
        setMobileViewOpen(false);
    }

    function GotoTable() {
        navigate("./BookTable");
    }

    return (
        <>
            <nav className="Navbar">
                {/* TOP SECTION */}
                <div className="topsection">
                    {/* LEFT */}
                    <div className="Top-left">
                        <div className="Phone">
                            <FiPhone />
                            <a className="details" href="tel:+917978171372">+917978171372</a>
                        </div>
                        <div className="Mail">
                            <FiMail />
                            <a className="details" href="mailto:jeebanjyotiprusty804@gmail.com">
                                jeebanjyotiprusty804@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="Top-right">
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <div className="Social-icon"><IoLogoTwitter /></div>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <div className="Social-icon"><FaFacebookF /></div>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <div className="Social-icon"><BsInstagram /></div>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <div className="Social-icon"><FaGithub /></div>
                        </a>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="Buttom-section">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h1 className="head">JEEBAN FOODSHOP</h1>
                    </div>

                    <div className="menu">
                        <Link className="menu-list" to={"/"}>Home</Link>
                        <Link className="menu-list" to={"/About"}>About</Link>
                        <Link className="menu-list" to={"/Menu"}>Menu</Link>
                        <Link className="menu-list" to={"/Page"}>Page</Link>
                        <Link className="menu-list" to={"/Contact"}>Contact</Link>
                    </div>

                    {/* BUTTONS / DESKTOP */}
                    <div className="button">
                        <button onClick={GotoTable} className="bk-btn">Book A Table</button>
                        {user ?
                            <button
                                onClick={handleLogout}
                                style={{ backgroundColor: "red", color: "white", border: "none", padding: "0.7rem 1rem", borderRadius: "30px", cursor: "pointer", fontSize: "1rem" }}>
                                Logout
                            </button> :
                            <FaUserCircle onClick={() => navigate("register")} size={35} style={{ cursor: 'pointer' }} />}
                    </div>

                    {/* HAMBURGER MENU ICON */}
                    <div className="menu-icon">
                        {mobileViewOpen ? (
                            <RxCross2 size={25} onClick={() => setMobileViewOpen(!mobileViewOpen)} />
                        ) : (
                            <IoMdMenu size={25} onClick={() => setMobileViewOpen(!mobileViewOpen)} />
                        )}
                    </div>
                </div>

                {/* MOBILE MENU */}
                {mobileViewOpen && (
                    <div className="Mobile-menu-items">
                        <div className="mobile-menues">
                            <Link className="mobile-menu-list" to={"/"} onClick={closeMobileMenu}>Home</Link>
                            <Link className="mobile-menu-list" to={"/About"} onClick={closeMobileMenu}>About</Link>
                            <Link className="mobile-menu-list" to={"/Menu"} onClick={closeMobileMenu}>Menu</Link>
                            <Link className="mobile-menu-list" to={"/Page"} onClick={closeMobileMenu}>Page</Link>
                            <Link className="mobile-menu-list" to={"/Contact"} onClick={closeMobileMenu}>Contact</Link>
                        </div>
                        <div className="mobile-btn">
                            <button
                                onClick={() => {
                                    GotoTable();
                                    closeMobileMenu();
                                }}
                                className="bk-tbl">
                                Book a Table
                            </button>
                            {user ?
                                <button
                                    onClick={handleLogout}
                                    style={{ backgroundColor: "red", color: "white", border: "none", padding: "0.7rem 1rem", borderRadius: "30px", cursor: "pointer", fontSize: "1rem" }} >
                                    Logout
                                </button> :

                                <button className="lgn-sup" onClick={() => { navigate("register"); closeMobileMenu(); }}>
                                    Login/Sign
                                </button>}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;