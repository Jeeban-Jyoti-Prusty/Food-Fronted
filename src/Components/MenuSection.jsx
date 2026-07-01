import "./MenuSection.css";
import { GiCoffeeCup } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";
import { RiDrinks2Line } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";
function MenuSection() {
    return (
        <>
            <div className="Menu">
                <h1>Browse Our Menu</h1>
                <div className="menu-cards">
                    <div className="card">
                        <div className="logo"><GiCoffeeCup /></div>
                        <p className="head">Breakfast</p>
                        <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <button>Explore Menu</button>
                    </div>
                    <div className="card">
                        <div className="logo"><PiBowlFood /></div>
                        <p className="head">Main Dishes</p>
                        <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <button>Explore Menu</button>
                    </div>
                    <div className="card">
                        <div className="logo"><RiDrinks2Line />
                        </div>
                        <p className="head">Drinks</p>
                        <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <button>Explore Menu</button>
                    </div>
                    <div className="card">
                        <div className="logo"><GiCakeSlice /></div>
                        <p className="head">Desserts</p>
                        <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
                        <button>Explore Menu</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuSection;