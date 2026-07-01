import "./Videosec.css";
import video1 from "../assets/video1.mp4";
import multi from "../assets/multi.png"
import order from "../assets/order.png"
import time from "../assets/time.png"

function Videosec() {
    return (
        <>
            <div className="videocontainer">
                <div className="videofit">
                    <video src={video1} controls loop muted></video>
                </div>

                {/* buttom sec */}
                <div className="benifit">

                    {/* BOX1 */}
                    <div className="boxes">
                        <div className="box">
                            <img src={multi} alt=" multi Cuisine" />
                        </div>
                        <div className="statement">
                            <h2>Multi Cuisine</h2>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>

                    {/* BOX2 */}
                    <div className="boxes">
                        <div className="box">
                            <img src={order} alt="order" />
                        </div>
                        <div className="statement">
                            <h2>Easy To Order</h2>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>

                    {/* BOX3 */}
                    <div className="boxes">
                        <div className="box">
                            <img src={time} alt="time" />
                        </div>
                        <div className="statement">
                            <h2>Fast Delivery</h2>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Videosec;