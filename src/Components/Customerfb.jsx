import "./Customerfb.css";

function Customerfb() {
    return (
        <>
            <div className="review-sec">
                <h2 className="review-heading">What Our Customers Say</h2>
                <div className="feedback-box">
                    
                    {/* Card 1 */}
                    <div className="customer-review">
                        <h3 className="rev-hd">“The best restaurant”</h3>
                        <p className="para1">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                        <div className="profile-sec">
                            <div className="profile-img">
                               <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop" alt="" />
                            </div>
                            <div className="cust-info">
                                <h3 className="cust-name">Jeeban jyoti prusty</h3>
                                <p className="cust-loc">Bhadrak</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="customer-review">
                        <h3 className="rev-hd">“Simply delicious”</h3>
                        <p className="para1">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                        <div className="profile-sec">
                            <div className="profile-img">
                                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop" alt="" />
                            </div>
                            <div className="cust-info">
                                <h3 className="cust-name">Jeeban jyoti prusty</h3>
                                <p className="cust-loc">Bhadrak</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="customer-review">
                        <h3 className="rev-hd">“One of a kind restaurant”</h3>
                        <p className="para1">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended</p>
                        <div className="profile-sec">
                            <div className="profile-img">
                                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop" alt="" />
                            </div>
                            <div className="cust-info">
                                <h3 className="cust-name">Jeeban jyoti prusty</h3>
                                <p className="cust-loc">Bhadrak</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Customerfb;