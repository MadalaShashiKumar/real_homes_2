import React from "react";
import './index.css'
import Navbar from "../Navbar";
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

const Home = () => {
    return (
        <div className="container-fluid">
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
        </div>
    )
}
export default Home