import "./HeroSection.css"
import { useNavigate } from "react-router-dom";
function HeroSection() {
    const navigate=useNavigate()
    return (
        <>
            <div className="Hero">
                <div className="Hero-content">
                    <h2>Best Food For
                        <br />Your Taste</h2>
                    <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                    <div className="book">
                        <button className="btn1" onClick={() => navigate("/BookTable")} >Book A table</button>
                        <button className="btn2">Explore Menu</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection;