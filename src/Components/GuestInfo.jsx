import "./GuestInfo.css";
import img1 from "../assets/menuimg1.png"
function GuestInfo() {
    return (
        <>
            <div className="guest-box">
                <div className="info-bx">

                    {/* left side */}
                    <div className="content">
                        <h1>A little information for our valuable guest</h1>
                        <p className="para">At place, we believe that dining is not just about food, but also about the overall experience. Our staff,
                            renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                        </p>
                        <div className="sm-boxes">
                            <div className="bx-part">
                                <div className="one">
                                    <p className="p01">3</p>
                                    <p className="p02">Location</p>

                                </div>
                                <div className="one">
                                    <p className="p01">65+</p>
                                    <p className="p02">Staff Members</p>
                                </div>

                            </div>
                            <div className="bx-part">
                                <div className="one">
                                    <p className="p01">1995</p>
                                    <p className="p02">Founded</p>
                                </div>
                                <div className="one">
                                    <p className="p01">100%</p>
                                    <p className="p02">Satisfied Customers</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="image-box">
                        <img src={img1} alt="" />
                    </div>


                </div>
            </div>

        </>
    )
}
export default GuestInfo;