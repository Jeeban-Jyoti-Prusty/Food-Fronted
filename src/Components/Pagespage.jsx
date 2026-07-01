import "./Pagespage.css";
import pageim1 from "../assets/pageim1.png";
import pageim2 from "../assets/pageim2.png";
import pageim3 from "../assets/pageim3.png";
import pageim4 from "../assets/pageim4.png";
import pageim5 from "../assets/pageim5.png";
import pageim6 from "../assets/pageim6.png";
import pageim7 from "../assets/pageim7.png";
import pageim8 from "../assets/pageim8.png";
import pageim9 from "../assets/pageim9.png";
import pageim10 from "../assets/pageim10.png";
import pageim11 from "../assets/pageim11.png";
import pageim12 from "../assets/pageim12.png";

function Pagespage() {
  return (
    <div className="blog-section">
      
      {/* Centered Heading and Subtitle */}
      <div className="blog-header">
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you need 
          to change to create a truly happens.
        </p>
      </div>

      {/* Row Layout for the Grid Layout */}
      <div className="blog-flex-container">
        
        {/* Card 1 */}
        <div className="blog-card">
          <img src={pageim1} alt="Sushi" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">How to prepare a delicious gluten free sushi</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="blog-card">
          <img src={pageim2} alt="Baking" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">Exclusive baking lessons from the pastry king</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="blog-card">
          <img src={pageim3} alt="Fries" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">How to prepare the perfect fries in an air fryer</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="blog-card">
          <img src={pageim4}  alt="Chicken" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">How to prepare delicious chicken tenders</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="blog-card">
          <img src={pageim5}  alt="Gadgets" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">5 great cooking gadgets you can buy to save time</h3>
          </div>
        </div>

        {/* Card 6 */}
        <div className="blog-card">
          <img src={pageim6}  alt="Burger" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">The secret tips & tricks to prepare a perfect burger</h3>
          </div>
        </div>

        {/* Card 7 */}
        <div className="blog-card">
          <img src={pageim7}  alt="Cheesecake" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">7 delicious cheesecake recipes you can prepare</h3>
          </div>
        </div>

        {/* Card 8 */}
        <div className="blog-card">
          <img src={pageim8}  alt="Pizza" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">5 great pizza restaurants you should visit this city</h3>
          </div>
        </div>

        <div className="blog-card">
          <img src={pageim9}  alt="Pizza" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">5 great cooking gadgets you can buy to save time</h3>
          </div>
        </div>

        <div className="blog-card">
          <img src={pageim10}  alt="Pizza" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">How to prepare a delicious gluten free sushi</h3>
          </div>
        </div>

        <div className="blog-card">
          <img src={pageim11}  alt="Pizza" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">Top 20 simple and quick desserts for kids</h3>
          </div>
        </div>

        <div className="blog-card">
          <img src={pageim12}  alt="Pizza" />
          <div className="blog-card-body">
            <span className="blog-date">January 3, 2023</span>
            <h3 className="blog-title">Top 20 simple and quick desserts for kids</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pagespage;