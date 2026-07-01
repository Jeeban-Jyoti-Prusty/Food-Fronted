import "./Event.css";
import eimg1 from "../assets/Event-img1.png"
import eimg2 from "../assets/Event-img2.png"
import eimg3 from "../assets/Event-img3.png"
import eimg4 from "../assets/Event-img4.png"
function Event() {
    return (
        <>
            <div className="event-box">
                <h2 className="hed1">We also offer unique <br />services for your events</h2>
                <div className="event-card">
                    <div className="card-top">
                        <img src={eimg1} alt="" />
                        <div className="card-buttom">
                            <h2>Weddings</h2>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                    </div>
                     <div className="card-top">
                        <img src={eimg2} alt="" />
                        <div className="card-buttom">
                            <h2>Events</h2>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                    </div>
                     <div className="card-top">
                        <img src={eimg3} alt="" />
                        <div className="card-buttom">
                            <h2>Caterings</h2>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                    </div>
                     <div className="card-top">
                        <img src={eimg4} alt="" />
                        <div className="card-buttom">
                            <h2>Birthdays</h2>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Event;