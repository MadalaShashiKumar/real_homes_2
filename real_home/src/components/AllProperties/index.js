import React from "react";
import './index.css'
import { ImLocation2 } from 'react-icons/im'
import { AiFillCamera } from 'react-icons/ai'
import { BsFillCameraReelsFill } from 'react-icons/bs'
import Navbar from '../Navbar'
import Footer from "../Footer";
import { Link } from "react-router-dom";


const AllPropertiesList = [
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
        price: '$3,100 Monthly'
    }, {
        id: 7,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Beautiful-House.jpg',
        title: 'Home in Coral Gables',
        location: 'Jeronimo Drive, Coral Gables, FL 33146, USA',
        familyType: 'For Sale',
        price: '$850,000'
    },
    {
        id: 8,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Apartment-1024x595.jpg',
        title: 'Luxury Apartment',
        location: '435 Southwest 12th Avenue, Miami, FL 33130, USA',
        familyType: 'For Rent',
        price: '$2,500 Monthly'
    },
    {
        id: 9,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Apartments-1024x595.jpg',
        title: 'Building Having 15 Apartments',
        location: '435 Southwest 12th Avenue, Miami, FL 33130, USA',
        familyType: 'For Sale',
        price: '$6,950,000'
    }, {
        id: 10,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/House-Design-488x326.jpg',
        title: 'Single Home at Florida 5, Pinecrest',
        location: 'Pinecrest, Miami-Dade County, Florida',
        familyType: 'For Sale',
        price: '$580,000'
    },

]


const AllProperties = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="all-properties-property">
                <h3 className="h3">Latest Properties</h3>
                <p className="p1">Newest Properties Around You</p>
                <ul className="row d-flex each-container">
                    {AllPropertiesList.map((each) => {
                        return (
                            <li className="col-xl-4 each-li" key={each.id}>
                                <Link className="nav-link" to={`/all/properties/${each.id}`} >
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
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Footer />
        </div >
    )
}
export default AllProperties