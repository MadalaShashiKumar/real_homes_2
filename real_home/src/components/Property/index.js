import React, { useEffect, useState } from "react";
import './index.css'
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { ImLocation2 } from 'react-icons/im'
import { LuBed, LuBath } from 'react-icons/lu'
import { PiGarageBold } from 'react-icons/pi'
import { CiCalendarDate } from 'react-icons/ci'
import { TiChartAreaOutline } from 'react-icons/ti'
import { IoIosResize } from 'react-icons/io'
import { BsCheckCircle, BsFillCameraReelsFill } from 'react-icons/bs'
import { BiComment, BiUserCircle } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineGlobal, AiFillCamera } from 'react-icons/ai'
import Navbar from "../Navbar";
import Footer from "../Footer";

const SingleProperty = [
    {
        id: 1,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-02.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/exterior-05.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-00.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-02.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/living-00.jpg'
        ],
        title: 'Home in Merrick Way',
        location: 'Merrick Way, Miami, FL 33134, USA',
        price: '$540,000',
        propertyId: 'RH-2015-06',
        bedrooms: 3,
        bathrooms: 3,
        garage: 2,
        yearBuild: 2018,
        area: 4300,
        lotSize: 5400,
        description: 'Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.',
        features: [
            '2 Stories',
            'Home Theater',
            'Lawn',
            'Marble Floors'
        ],
        agent1: [
            {
                img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
            },
            {
                name: 'Melissa William'
            }
        ],
        agent2: [
            {
                img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/John-David.jpg',
            },
            {
                name: 'John David'
            }
        ]
    },
    {
        id: 2,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/living-room-attached-kitchen.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/living-room-attached-kitchen.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/collov-home-design-wyBKACF3EFs-unsplash.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/Untitled-3.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/obi-pixel6propix-MMHcFUKkBD4-unsplash.jpg',
        ],
        title: 'Villa in Coral Gables',
        location: 'Deering Bay Drive, Coral Gables, FL 33158, USA',
        price: '$825,000',
        propertyId: 'RH-2017-12',
        bedrooms: 3,
        bathrooms: 3.5,
        garage: 2,
        yearBuild: 2019,
        area: 3500,
        lotSize: 4800,
        description: 'Enjoy serenity of Deering Bay whole day from this spectacular North and South, three bedroom, three and a half bath Milano unit with 10ft ceilings which provide light and airy views of the golf course and pool. Oversized open balconies provide luxurious entertainment spaces. Spacious flow-through floor plan with lavish master bedroom suite with his and her walk-in closets, gourmet cook’s kitchen with granite counters and top of the line Thermador and Sub Zero appliances.',
        features: [
            '2 Stories',
            'Bike Path',
            'Central Cooling',
            'Jog Path',
            'Jog Path',
            'Swimming Pool'
        ],
        agent1: [
            {
                img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg'
            },
            {
                name: 'Nathan James'
            }
        ],
        agent2: [
            {
                img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
            },
            {
                name: 'Melissa William'
            }
        ]
    },
    {
        id: 3,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/spacejoy-scaled.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/spacejoy-scaled.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-00.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/dining-01.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-02.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-04.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/living-00.jpg'
        ],
        title: 'Villa on Hollywood Boulevard',
        location: 'Hatteras Lane, Hollywood, FL 33019, USA',
        price: '$740,000',
        propertyId: 'RH-2017-10',
        bedrooms: 3,
        bathrooms: 4,
        garage: 2,
        yearBuild: 2018,
        area: 4530,
        lotSize: 5800,
        description: 'The very best waterfront location in Harbor Islands complete with private dock and amazing water frontage! Offering panoramic water views, this spacious home has volume ceilings and offers a rarely available ground floor master bedroom suite. The modern kitchen has been completely updated, leading to entertainment and family rooms that open to fabulous back yard and swimming pool overlooking the waterways. Must be seen!',
        features: [
            '2 Stories',
            'Central Cooling',
            'Dual Sinks',
            'Electric Range',
            'Fire Place',
            'Laundry Room',
            'Lawn',
            'Swimming Pool'
        ],
        agent1: [
            {
                img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Alice-Brian-1-210x210.jpg',
            },
            {
                name: 'Alice Brian'
            }
        ],
        agent2: [
            {
                img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg',
            },
            {
                name: 'Nathan James'
            }
        ]
    },
    {
        id: 4,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Modern-House.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/resturant-interrior-1.jpg'
        ],
        title: 'Traditional Food Restaurant',
        location: 'Traditional Food Restaurant',
        price: '$2,600 Monthly',
        propertyId: 'RH-2017-11',
        bedrooms: 3,
        bathrooms: 4,
        garage: 2,
        yearBuild: 2018,
        area: 950,
        lotSize: 5800,
        description: 'We are an award winning and very unique concept inspired by street food – Burgers + Kebabs and have elevated it to a modern day experience. Using the freshest of ingredients, custom meat blends, and unique flavors we pride ourselves on sourcing the highest quality products and carefully crafting each plate for an unforgettable experience.',
        features: [
            '2 Stories',
            'Central Cooling',
        ],
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
            name: 'Alice Brian'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg',
            name: 'Nathan James'
        }
    },
    {
        id: 5,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/House-Design.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/House-Design.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/house-02.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bathroom-00.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-04.jpg'
        ],
        title: 'Villa on Grand Avenue',
        location: 'CocoWalk, 3015 Grand Avenue, Miami, USA',
        price: '$4,750 Monthly',
        propertyId: 'RH-2017-09',
        bedrooms: 4,
        bathrooms: 4,
        garage: 2,
        yearBuild: 2018,
        area: 9350,
        lotSize: 9800,
        description: 'Spacious and fabulous home in prime location. This executive style four bed, four bath home has impact resistant windows, renovated kitchen with wood cabinets, granite countertops and luminous breakfast area. All bathrooms are tastefully redone with contemporary elements and vanities.Open floor plan leads to the patio, pool and backyard for great entertainment or relaxation. Live in the city beautiful, enjoy the best shopping, restaurants, schools, and much more this home offers.',
        features: [
            '2 Stories',
            'Central Cooling',
            'Dual Sinks',
            'Electric Range',
            'Fire Place',
            'Home Theater',
            'Laundry Room',
            'Marble Floors',
            'Swimming Pool'
        ],
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
            name: 'Alice Brian'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg',
            name: 'Nathan James'
        }
    },
    {
        id: 6,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/office-interior-01-1.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/office-interior-01-1.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/office-interior-02-1.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/meeting-working-room-office-building-scaled.jpg',
        ],
        title: 'Office Space at Northwest 107th',
        location: 'Northwest 107th Avenue, Doral, FL 33178, USA',
        price: '$3,100 Monthly',
        propertyId: 'RH-2017-08',
        bedrooms: 0,
        bathrooms: 4,
        garage: 0,
        yearBuild: 2019,
        area: 2800,
        lotSize: 0,
        description: 'Beautifully landscaped four story building and professionally decorated common areas. After hours secured entry access. Adjacent to famous hotels. Ample free parking. Restaurants, banks, pharmacy and daycare facility within walking distance.',
        features: [
            '2 Stories',
            'Central Cooling',
            'Dual Sinks',
        ],
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Alice-Brian-1-210x210.jpg',
            name: 'Alice Brian'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/John-David.jpg',
            name: 'John David'
        }
    },
    {
        id: 7,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Beautiful-House.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Beautiful-House.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bathroom-02.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-02.jpg',
        ],
        title: 'Home in Coral Gables',
        location: 'Jeronimo Drive, Coral Gables, FL 33146, USA',
        price: '$850,000',
        propertyId: 'RH-2017-05',
        bedrooms: 4,
        bathrooms: 4.5,
        garage: 2,
        yearBuild: 2019,
        area: 3800,
        lotSize: 4500,
        description: 'Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef’s kitchen opening to a large family room with a working fireplace and voluminous ceilings in addition to formal dining and living areas. Another highlight is the spacious master suite with an office, gym and a separate sitting area. The yard offers plenty of shade thanks to the luscious palm and fruit trees. Other benefits include a gas range and dryer and a water treatment system.',
        features: [
            '2 Stories',
            'Central Cooling',
            'Dual Sinks',
            'Electric Range',
            'Fire Place',
            'Home Theater',
            'Laundry Room',
            'Lawn',
            'Marble Floors',
            'Swimming Pool'
        ],
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
            name: 'Melissa William'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/John-David.jpg',
            name: 'John David'
        }
    },
    {
        id: 8,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Apartment-1024x595.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Apartment-1024x595.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-02.jpg',
        ],
        title: 'Luxury Apartment',
        location: '435 Southwest 12th Avenue, Miami, FL 33130, USA',
        price: '$2,500 Monthly',
        propertyId: 'RH-2017-04',
        bedrooms: 2,
        bathrooms: 2,
        garage: 1,
        yearBuild: 2019,
        area: 1650,
        lotSize: 0,
        description: 'Luxury Apartment available in an ideal location, with city and ocean views, walking distance to important Roads and lifestyle amenities, enjoy a Chic, well decorated 5 star apartment just steps away to the beach.2 large bedrooms with a Queen size bed each, 2 full bathrooms plus a full size sofa-bed to accommodate up to 6 people.The apartment is well equipped with everything you need for a pleasant stay, brand new appliances, complete dining set plus pots, pans, silverware, small appliances, plus TV, high speed internet WiFi and free garage parking.',
        features: [
            'Central Heating',
            'Dual Sinks',
            'Electric Range',
            'Emergency Exit',
            'Fire Alarm',
            'Marble Floors'
        ],
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
            name: 'Marble Floors'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Alice-Brian-1-210x210.jpg',
            name: 'Alice Brian'
        }
    },
    {
        id: 9,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Apartments-1024x595.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Apartments-1024x595.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-02.jpg',
        ],
        title: 'Building Having 15 Apartments',
        location: '435 Southwest 12th Avenue, Miami, FL 33130, USA',
        price: '$6,950,000',
        propertyId: 'RH-2017-03',
        bedrooms: 100,
        bathrooms: 150,
        garage: 50,
        yearBuild: 2020,
        area: 52000,
        lotSize: 75000,
        description: 'Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        features: [
            'Central Heating',
            'Dual Sinks',
            'Electric Range',
            'Emergency Exit',
            'Fire Alarm',
            'Marble Floors'
        ],
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/John-David.jpg',
            name: 'John David'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Alice-Brian-1-210x210.jpg',
            name: 'Alice Brian'
        }
    },
    {
        id: 10,
        mainImg: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/exterior-03.jpg',
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/exterior-03.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-00.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-02.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/living-00.jpg'
        ],
        title: 'Single Home at Florida 5, Pinecrest',
        location: 'Pinecrest, Miami-Dade County, Florida',
        price: '$580,000',
        propertyId: 'RH-2017-02',
        bedrooms: 4,
        bathrooms: 4,
        garage: 2,
        yearBuild: 2020,
        area: 5500,
        lotSize: 6300,
        description: 'Beautiful home on quiet, tree lined street. Addition and renovation create desirable layout with gracious master suite, oversized walk-in closet and lovely bathroom! Formal living room with working fireplace and French doors open to gorgeous, lushly landscaped yard. Home features formal dining room, elegant kitchen with wood beamed ceilings, bright breakfast room off family room overlooking magnificent pool and patio. Details like crown molding, coral rock wall, marble and hardwood floors, tumbled marble driveway and lovely front porch create wonderful ambiance.',
        features: [
            '2 Stories',
            'Central Heating',
            'Dual Sinks',
            'Electric Range',
            'Fire Alarm',
            'Fire Place',
            'Lawn',
            'Marble Floors'
        ],
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg',
            name: 'Nathan James'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/John-David.jpg',
            name: 'John David'
        }
    }
]

const SimilarProperties = [
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

const settings1 = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    adaptiveHeight: true,
    cssEase: 'linear',
    arrows: true,
    fade: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],

}

const Property = () => {
    const [eachProperty, setEachProperty] = useState({})
    const [mainImgOne, setMainImgOne] = useState('')
    const [bedroomApartment, setBedroomApartment] = useState(true)
    const { id } = useParams()
    const results = SingleProperty.filter((each) => (
        each.id === parseInt(id)
    ))
    useEffect(() => {
        setEachProperty(...results)
    }, [])

    useEffect(() => {
        setMainImgOne(eachProperty.mainImg)
    }, [eachProperty])

    const imgBtn = (event) => {
        setMainImgOne(event.target.id)
    }

    const bedroomApartmentBtn1 = () => {
        setBedroomApartment(true)
    }

    const bedroomApartmentBtn2 = () => {
        setBedroomApartment(false)
    }

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="each-prop-img-container">
                <img className=" each-prop-sub-main-img" src={mainImgOne} alt="img" />
                <div className="each-prop-sub-text">
                    <div>
                        <button className="sale-btn" type="button">For Sale</button>
                        <button className="featured-btn" type="button">Featured</button>
                        <button className="hot-btn" type="button">Hot</button>
                    </div>
                    <div className="d-flex">
                        <h3 className="each-prop-title">{eachProperty.title}</h3>
                        <h3 className="each-prop-price">{eachProperty.price}</h3>
                    </div>
                    <div className="d-flex">
                        <ImLocation2 className="each-prop-location-icon" />
                        <p className="each-prop-location">{eachProperty.location}</p>
                    </div>

                </div>
            </div>
            <ul className="each-prop-ul-1 d-flex">
                {eachProperty.images && eachProperty.images.map((each, index) => (
                    <li key={index} className="each-prop-li-1 col-xl-2">
                        <img onClick={imgBtn} id={each} className="each-prop-li-1-img" src={each} alt="img" />
                    </li>
                ))}
            </ul>
            <div className="bg-danger">
                <div className="bg-light col-xl-8 p-1">
                    <div className="overview-container">
                        <div className="d-flex mt-5">
                            <h4 className="overview-heading">Overview</h4>
                            <p className="property-id">Property ID : {eachProperty.propertyId}</p>
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="bedroom-container">
                                <p className="bedroom-para">Bedrooms</p>
                                <p className="bedroom-para2"><LuBed className="bedroom-para-icon" /> {eachProperty.bedrooms}</p>
                            </div>
                            <div className="bedroom-container">
                                <p className="bedroom-para">Bathrooms</p>
                                <p className="bedroom-para2"><LuBath className="bedroom-para-icon" /> {eachProperty.bathrooms}</p>
                            </div>
                            <div className="bedroom-container">
                                <p className="bedroom-para">Garage</p>
                                <p className="bedroom-para2"><PiGarageBold className="bedroom-para-icon" /> {eachProperty.garage}</p>
                            </div>
                            <div className="bedroom-container">
                                <p className="bedroom-para">Year Built</p>
                                <p className="bedroom-para2"><CiCalendarDate className="bedroom-para-icon" /> {eachProperty.yearBuild}</p>
                            </div>
                            <div className="bedroom-container">
                                <p className="bedroom-para">Area</p>
                                <p className="bedroom-para2"><TiChartAreaOutline className="bedroom-para-icon" /> {eachProperty.area} sq ft</p>
                            </div>
                            <div className="bedroom-container">
                                <p className="bedroom-para">Lot Size</p>
                                <p className="bedroom-para2"><IoIosResize className="bedroom-para-icon" /> {eachProperty.lotSize} sq ft</p>
                            </div>
                        </div>
                    </div>
                    <div className="description-container">
                        <h4 className="description-heading">Description</h4>
                        <p className="description-para">{eachProperty.description}</p>
                    </div>
                    <div className="additional-container">
                        <h4 className="description-heading mb-4">Additional Details</h4>
                        <div className="d-flex">
                            <div className="col-xl-4">
                                <h6 className="additional-heading">BEDROOM FEATURES:</h6>
                                <h6 className="additional-heading">DINING AREA:</h6>
                                <h6 className="additional-heading">DOORS & WINDOWS:</h6>
                                <h6 className="additional-heading">ENTRY LOCATION:</h6>
                                <h6 className="additional-heading">EXTERIOR CONSTRUCTION:</h6>
                                <h6 className="additional-heading">FIREPLACE FUEL:</h6>
                                <h6 className="additional-heading">FIREPLACE LOCATION:</h6>
                                <h6 className="additional-heading">FLOORS:</h6>
                            </div>
                            <div className="col-xl-8">
                                <p className="additional-paragraph">Main Floor Master Bedroom, Walk-In Closet</p>
                                <p className="additional-paragraph">Breakfast Counter/Bar, Living/Dining Combo</p>
                                <p className="additional-paragraph">Bay Window</p>
                                <p className="additional-paragraph">Mid Level</p>
                                <p className="additional-paragraph">Wood</p>
                                <p className="additional-paragraph">Pellet Stove</p>
                                <p className="additional-paragraph">Living Room</p>
                                <p className="additional-paragraph">Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood</p>
                            </div>
                        </div>
                    </div>
                    <div className="note-container">
                        <h4 className="description-heading">Properties Common Note</h4>
                        <p className="note-para">This is a common note that can be displayed on all properties but controlled from one simple option.</p>
                    </div>
                    <div className="features-container">
                        <h4 className="description-heading mb-3">Features</h4>
                        <ul className="d-flex row features-ul">
                            {eachProperty.features && eachProperty.features.map((each, index) => {
                                return (
                                    <li className="col-xl-4 features-li" key={index}>
                                        <BsCheckCircle className="features-icon" /> {each}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="floor-Plans-container">
                        <h4 className="description-heading">Floor Plans</h4>
                        <div className="floor-Plans-sub-container">
                            <button onClick={bedroomApartmentBtn1} className={bedroomApartment === true ? `floor-Plans-sub-button floor-Plans-sub-button-color` : `floor-Plans-sub-button`} type="button">1 Bedroom Apartment</button>
                            <button onClick={bedroomApartmentBtn2} className={bedroomApartment === false ? `floor-Plans-sub-button floor-Plans-sub-button-color` : `floor-Plans-sub-button`} type="button">2 Bedroom Apartment</button>
                            {bedroomApartment === true ? (
                                <div className="bedroom-apartment-container">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="bedroom-apartment-hed"><b>1 Bedroom Apartment</b></h6>
                                        <h6 className="bedroom-apartment-hed"><b>Price On Call</b></h6>
                                    </div>
                                    <p className="mt-2 mb-1">A walk-in closet and a bathroom with a vanity, toilet, and walk-in shower are also included in the attached bedroom.</p>
                                    <div className="d-flex ">
                                        <div className="bedroom-container">
                                            <p className="bedroom-para">Bedrooms</p>
                                            <p className="bedroom-para2"><LuBed className="bedroom-para-icon" /> 1</p>
                                        </div>
                                        <div className="bedroom-container">
                                            <p className="bedroom-para">Bathrooms</p>
                                            <p className="bedroom-para2"><LuBath className="bedroom-para-icon" /> 1</p>
                                        </div>
                                        <div className="bedroom-container">
                                            <p className="bedroom-para">Area</p>
                                            <p className="bedroom-para2"><TiChartAreaOutline className="bedroom-para-icon" /> {eachProperty.area} sq ft</p>
                                        </div>
                                    </div>
                                    <img className="bedroom-apartment-img" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/1Bedroom-2d.jpg" alt="img" />
                                </div>
                            ) : (
                                <div className="bedroom-apartment-container">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="bedroom-apartment-hed"><b>2 Bedroom Apartment</b></h6>
                                        <h6 className="bedroom-apartment-hed"><b>Price On Call</b></h6>
                                    </div>
                                    <p className="mt-2 mb-1">In this apartment 2 car garage has a direct entrance door into the unit, with a coat closet, powder bathroom, and a separate laundry room nearby.</p>
                                    <div className="d-flex ">
                                        <div className="bedroom-container">
                                            <p className="bedroom-para">Bedrooms</p>
                                            <p className="bedroom-para2"><LuBed className="bedroom-para-icon" /> 2</p>
                                        </div>
                                        <div className="bedroom-container">
                                            <p className="bedroom-para">Bathrooms</p>
                                            <p className="bedroom-para2"><LuBath className="bedroom-para-icon" /> 2</p>
                                        </div>
                                        <div className="bedroom-container">
                                            <p className="bedroom-para">Area</p>
                                            <p className="bedroom-para2"><TiChartAreaOutline className="bedroom-para-icon" /> {eachProperty.area + eachProperty.area} sq ft</p>
                                        </div>
                                    </div>
                                    <img className="bedroom-apartment-img" src="https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/2Bedroom-2d.jpg" alt="img" />
                                </div>
                            )
                            }
                        </div>
                    </div>
                    <div className="property-video-container ">
                        <h4 className="description-heading mb-4">Property Video</h4>
                        <div className="w-100 bg-danger ">
                            <ReactPlayer width='100%' height='70vh' className='video' url='https://youtu.be/uTIcquf4Z-s?si=3RmRmPLfuAi_-x-T' />
                        </div>
                    </div>
                    <div className="comment-container">
                        <h4 className="description-heading">Leave a Comment</h4>
                        <div className="comment-sub-container">
                            <label className="comment-label" htmlFor="comment">Comment</label>
                            <div className="d-flex comment-card">
                                <BiComment className="comment-card-icon" />
                                <br />
                                <textarea rows={8} placeholder="Your Comment" className="comment-card-textarea" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-xl-6">
                                    <label className="comment-label" htmlFor="comment">Name</label>
                                    <div className="d-flex comment-card">
                                        <BiUserCircle className="comment-card-icon" />
                                        <br />
                                        <input type="text" placeholder="Your Name" className="comment-card-input" />
                                    </div>
                                </div>
                                <div className=" col-xl-6">
                                    <label className="comment-label" htmlFor="comment">Email</label>
                                    <div className="d-flex comment-card">
                                        <AiOutlineMail className="comment-card-icon" />
                                        <br />
                                        <input type="email" placeholder="Your Email" className="comment-card-input" />
                                    </div>
                                </div>
                            </div>
                            <div >
                                <label className="comment-label" htmlFor="comment">Website</label>
                                <div className="d-flex comment-card">
                                    <AiOutlineGlobal className="comment-card-icon" />
                                    <br />
                                    <input type="email" placeholder="Your Website" className="comment-card-input" />
                                </div>
                            </div>
                            <button className="comment-btn" type="button">Post Comment</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="similar-container">
                <h4 className="similar-heading">Similar Properties</h4>
                <div className="slick-container1">
                    <Slider {...settings1}>
                        {SimilarProperties.map((each) => {
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
                    </Slider>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Property