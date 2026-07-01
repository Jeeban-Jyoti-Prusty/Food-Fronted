import "./OrderApps.css";
function OrderApps() {
    return (
        <div className="order-container">
            {/* Left side text block */}
            <div className="text-section">
                <h1>You can order through apps</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
                    sed et aliquet aliquet risus tempor semper.
                </p>
            </div>

            {/* Right side box grid */}
            <div className="apps-grid">
                <div className="card color-uber">Uber Eats</div>
                <div className="card color-grubhub">GRUBHUB</div>
                <div className="card color-postmates">Postmates</div>

                <div className="card color-doordash">DOORDASH</div>
                <div className="card color-foodpanda">foodpanda</div>
                <div className="card color-deliveroo">deliveroo</div>

                <div className="card color-instacart">instacart</div>
                <div className="card color-justeat">JUST EAT</div>
                <div className="card color-didi">DiDi Food</div>
            </div>
        </div>
    );
}

export default OrderApps;