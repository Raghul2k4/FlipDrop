import React from "react";
import voilet from '../assets/voilet.jpg';
import shoping from '../assets/shoping.png';
import totalbill from '../assets/totalbill.jpg'
function Cards ()
{
    return(
        <div className="container-fluid" >
            <div className="row m-5 border" >
                <div className="col card m-3 ">
                    <img src={voilet} alt="voilet" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Explore Our Mobile & Accessories Store</h5>
                        <p className="card-text">Discover the latest smartphones, custom cases, and mobile accessories. We offer top-quality products to enhance your mobile experience, all at affordable prices. Shop with us for the best in mobile technology!</p>
                    </div>
                </div>
                <div className="col card m-3 ">
                    <img src={shoping} className="card-img-top" alt="shoping-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Unlock Incredible Deals on Mobiles & Accessories</h5>
                        <p className="card-text">Discover cost-efficient smartphones and a vast range of stylish accessories. Enjoy unbeatable value without compromising on quality. Explore our diverse selection and upgrade your mobile experience today!</p>
                    </div>
                </div>
                <div className="col card m-3">
                    <img src={totalbill} className="card-img-top" alt="bill-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Grab the Best Deals—Add to Cart Now!</h5>
                        <p className="card-text">Explore our wide selection of mobile phones and accessories, and add your favorites to the cart with just a click. Enjoy exclusive discounts on your entire purchase. Shop now and save big on top-quality products! </p>
                     </div>
                    </div>
                </div>

            </div>
    );
}
export default Cards;