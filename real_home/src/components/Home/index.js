import React, { useState } from "react";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ImLocation2 } from 'react-icons/im'
import { AiFillCamera, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCameraReelsFill } from 'react-icons/bs'

const DiscoverLatestProperties = [
    {
        id: 1,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way.jpg',
        title: 'Home in Merrick Way',
        location: 'Merrick Way, Miami, FL 33134, USA',
        familyType: 'Single Family',
        price: '$540,000'
    },
    {
        id: 2,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-2-488x326.jpg',
        title: 'Villa in Coral Gables',
        location: 'Deering Bay Drive, Coral Gables, FL 33158, USA',
        familyType: 'Villa',
        price: '$825,000'
    },
    {
        id: 3,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-1024x684.jpg',
        title: 'Villa on Hollywood Boulevard',
        location: 'Hatteras Lane, Hollywood, FL 33019, USA',
        familyType: 'Villa',
        price: '$740,000'
    },
    {
        id: 4,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House-488x326.jpg',
        title: 'Traditional Food Restaurant',
        location: 'Sunset Drive, Miami, FL, USA',
        familyType: 'Shop',
        price: '$2,600 Monthly',
    },
    {
        id: 5,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/House-Design-488x326.jpg',
        title: 'Villa on Grand Avenue',
        location: 'CocoWalk, 3015 Grand Avenue, Miami, USA',
        familyType: 'Villa',
        price: '$4,750 Monthly'
    },
    {
        id: 6,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/meeting-working-room-office-building-488x326.jpg',
        title: 'Office Space at Northwest 107th',
        location: 'Northwest 107th Avenue, Doral, FL 33178, USA',
        familyType: 'Office',
        price: '$3,100 Monthly',
    },
]
const HomeMerrickWay = [
    {
        id: 1,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way-1024x683.jpg',
        avalible: 2,
    },
    {
        id: 2,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/House-Design-1024x595.jpg',
        avalible: 7,
    },
    {
        id: 3,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-2.jpg',
        avalible: 5,
    },
    {
        id: 4,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/property-3-1024x684.jpg',
        avalible: 1,
    },

]

const News = [
    {
        id: 1,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/blog-post-1.jpg',
        title: 'As The Real Estate Market Heats Up, Heres How First-time Buyers Can Keep Their Cool',
        roomType: 'Luxury',
        date: 'June 16, 2022'
    },
    {
        id: 2,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/francesca-tosolini-LL9V0iMpStM-unsplash-1-1240x720.jpg',
        title: 'Real Estate Market Heats Up, Heres How First-time Buyers Can Keep Their Cool',
        roomType: 'Luxury',
        date: 'June 15, 2022'
    },
    {
        id: 3,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/blog-image-3-1-488x326.jpg',
        title: 'As The Real Estate Market Heats Up, Heres How First-time Buyers Can Keep Their Cool',
        roomType: 'Market Trends',
        date: 'June 13, 2022'
    },
    {
        id: 4,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/blog-rental-income-1240x720.jpg',
        title: 'Dramatically benchmark corporate leadership via scalable deliverables',
        roomType: 'Market Trends',
        date: 'June 12, 2022'
    },
]

const Partners = [
    {
        id: 1,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png'
    },
    {
        id: 2,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Ironwood-Apartments.png'
    },
    {
        id: 3,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Rosewood-Homes.png'
    },
    {
        id: 4,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/The-Capital.png'
    },
    {
        id: 5,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Adobe-Homes.png'
    },
]

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
    arrows: true,
    fade: false,
    mobileFirst: true,
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //         },
    //     },
    //     {
    //         breakpoint: 786,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //         },
    //     },
    // ],

}

const Home = () => {
    const [homeMerrickWay, setHomeMerrickWay] = useState(HomeMerrickWay[0].img)

    const homeMerrickWayBtn = (event) => {
        setHomeMerrickWay(event.target.id)
    }

    return (
        <div className="container-fluid font">
            <Navbar />
            <div className="d-flex">
                <div className="find-sub-container col-xl-5">
                    <h2>Find Your Sweet Home</h2>
                </div>
                <div className="find-sub-container1 d-flex justify-content-center col-xl-7">
                    <h3>Need Help To Choose Your Property</h3>
                    <button className="find-btn" type="button" >Let Us Call You!</button>
                </div>
            </div>
            <div className="home-img-container">
                <img className="home-img" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/spacejoy-scaled.jpg" alt="home" />
                <div className="home-img-sub-container d-flex justify-content-between">
                    <div>
                        <h4 className="home-img-heading">Villa on Hollywood Boulevard</h4>
                        <p className="home-img-para">Build 2018</p>
                    </div>
                    <div>
                        <p className="home-img-heading1">For Sale</p>
                        <h2 className="home-img-para1">$740,000</h2>
                    </div>
                </div>
            </div>
            <div className="discover-containier">
                <h3 className="h3">Discover Latest Properties</h3>
                <p className="p">Newest Properties Around You</p>
                <ul className="row d-flex each-container">
                    {DiscoverLatestProperties.map((each) => {
                        return (
                            <li className="col-xl-4 each-li" key={each.id}>
                                <div className="each-img-main-container">
                                    <img className="each-img" src={each.img} alt="img" />
                                    <div className="each-img-positons-container">
                                        <button className="button-1" type="button">For Sale</button>
                                        <button className="button-2" type="button"><AiFillCamera /> 2</button>
                                        <button className='button-3' type="button"><BsFillCameraReelsFill /> 4</button>
                                    </div>
                                </div>
                                <div className="each-para">
                                    <h6>{each.title}</h6>
                                    <div className="d-flex">
                                        <ImLocation2 className="each-para-location-logo" />
                                        <p className="each-para-location">{each.location}</p>
                                    </div>
                                    <p className="each-family">{each.familyType}</p>
                                    <p className="each-price">{each.price}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="merrick-container d-flex">
                <div className="col-xl-7">
                    <img className="merrick-img" src={homeMerrickWay} alt="img" />
                    <ul cla className="d-flex merrick-ul">
                        {HomeMerrickWay.map((each) => {
                            return (
                                <li className="merrick-li" key={each.id}>
                                    <img className="merrick-li-img" id={each.img} onClick={homeMerrickWayBtn} src={each.img} alt="img" />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="merrick-text-containier col-xl-5">
                    <div>
                        <button className="button-11" type="button">For Sale</button>
                        <button className="button-22" type="button">Featured</button>
                        <button className="button-33" type="button">Hot</button>
                    </div>
                    <h2 className="merrick-text-heading">Home in Merrick Way</h2>
                    <div className="d-flex">
                        <ImLocation2 className="each-para-location-logo" />
                        <p className="each-para-location">Merrick Way, Miami, FL 33134, USA</p>
                    </div>
                    <h3 className="merrick-text-price">$540,000</h3>
                    <p className="merrick-text-paragraph">Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.</p>
                </div>
            </div>
            <div>
                <h3 className="text-center pt-5 mb-0  customer-lovers-us-heading"><b>Customers Loves Us</b> </h3>
                <div className="slick-container">
                    <Slider {...settings}>
                        <div className="silder-button row d-flex">
                            <div className="col-xl-4 p-5">
                                <img className="slider-img" src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" alt="img" />
                            </div>
                            <div className="slider-content-container col-xl-8 d-flex flex-column justify-content-center">
                                <h3 className="slider-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                                <p className="slider-content-para"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h4 className="slider-content-heading1">Jhone Doe</h4>
                                <p className="slider-content-para1">Themeforest User</p>
                            </div>
                        </div>

                        <div className="silder-button row d-flex">
                            <div className="col-xl-4 p-5">
                                <img className="slider-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lVAvXIIadUsaJoRHTHqNef3JsmsM8uoTlg&usqp=CAU" alt="img" />
                            </div>
                            <div className="slider-content-container col-xl-8 d-flex flex-column justify-content-center">
                                <h3 className="slider-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                                <p className="slider-content-para"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h4 className="slider-content-heading1">Daisy Bee</h4>
                                <p className="slider-content-para1">Themeforest User</p>
                            </div>
                        </div>

                        <div className="silder-button row d-flex">
                            <div className="col-xl-4 p-5">
                                <img className="slider-img" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small/man-avatar-character-isolated-icon-free-vector.jpg" alt="img" />
                            </div>
                            <div className="slider-content-container col-xl-8 d-flex flex-column justify-content-center">
                                <h3 className="slider-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                                <p className="slider-content-para"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h4 className="slider-content-heading1">Mariya B</h4>
                                <p className="slider-content-para1">Themeforest User</p>
                            </div>
                        </div>

                        <div className="silder-button row d-flex">
                            <div className="col-xl-4 p-5">
                                <img className="slider-img" src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" alt="img" />
                            </div>
                            <div className="slider-content-container col-xl-8 d-flex flex-column justify-content-center">
                                <h3 className="slider-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                                <p className="slider-content-para"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h4 className="slider-content-heading1">Ronald J r</h4>
                                <p className="slider-content-para1">Themeforest User</p>
                            </div>
                        </div>

                        <div className="silder-button row d-flex">
                            <div className="col-xl-4 p-5">
                                <img className="slider-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiIVvfVDuLa_v7hnbzVdMNBx7OdDOGAW4zg&usqp=CAU" alt="img" />
                            </div>
                            <div className="slider-content-container col-xl-8 d-flex flex-column justify-content-center">
                                <h3 className="slider-content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                                <p className="slider-content-para"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h4 className="slider-content-heading1">Mandy Caps</h4>
                                <p className="slider-content-para1">Themeforest User</p>
                            </div>
                        </div>


                    </Slider>
                </div>
            </div>
            <div className="discover-prop-container" >
                <h4 className="m-2"><b>Discover Properties</b></h4>
                <p className="m-2 mb-5 home-img-para"><b>Find Properties In Your Favourite Citiess  </b></p>
                <div className="discover-prop-container1 d-flex justify-content-between">
                    {HomeMerrickWay.map((each) => {
                        return (
                            <div key={each.id} className="discover-prop-sub-container  col-xl-3">
                                <img className="discover-prop-img p-2" src={each.img} alt="img" />
                                <div className="discover-prop-text">
                                    <button className="discover-prop-btn" type="button">View All</button>
                                </div>
                                <div className="discover-prop-text1-container">
                                    <h1 className="text-center mt-2 mb-0">{each.avalible}</h1>
                                    <p className="m-0 p-2 pt-0">Properties</p>
                                    <div className="discover-prop-text2">
                                        <p className="discover-prop-text2-para">New</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="letest-news-container">
                <h4 className="m-2"><b>Latest News & Update</b></h4>
                <p className="m-2 mb-5 home-img-para"><b>Latest News About Real Estate</b></p>
                <ul className="letest-news-ul p-0 d-flex row">
                    {News.map((each) => {
                        return (
                            <li key={each.id} className="letest-news-li col-xl-6 ">
                                <img className="letest-news-img" src={each.img} alt="img" />
                                <div className="p-2 pt-4">
                                    <p className="letest-news-date">{each.date}</p>
                                    <h5 className="letest-news-title">{each.title}</h5>
                                    <p className="letest-news-roomtype">{each.roomType}</p>
                                </div>
                            </li>

                        )
                    })}
                </ul>
            </div>
            <div className="partners-container pb-5">
                <h4 className="m-2"><b>Partners of RealHomes</b></h4>
                <p className="m-2 mb-5 home-img-para"><b>We are pleased to work with our partners</b></p>
                <ul className="p-0 d-flex justify-content-between">
                    {Partners.map((each) => {
                        return (
                            <li key={each.id} className="partners-li col-xl-2">
                                <img className="partners-img " src={each.img} alt="img" />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Footer />
        </div>
    )
}
export default Home