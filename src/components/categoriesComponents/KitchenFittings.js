function KitchenFittings(){
    return (
        <section id="kitchen">
            <div className="wardrobe">
                <div className="productDescription">
                    <h4 className="header">Kitchen Fittings</h4>
                </div>

                <div className="boxContainer">
                    <div className="box">
                        <div className="imgContainer">
                            <img
                                alt='assets'
                                src='https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L2+Images/Kitchen+Fittings/Kitchen+Fittings.webp'
                            />
                        </div>
                        <div className="productName">
                            <p className="viewAll">
                                View All
                            </p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgContainer">
                            <img
                                alt='assets'
                                src='https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Kitchen+Basket/Kitchen+Basket.webp'
                            />
                        </div>
                        <div className="productName">
                            <p className="viewAll">
                                Kitchen Basket
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default KitchenFittings;