import React from "react";
import './index.css'
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

const SingleProperty = [
    {
        id: 1,
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
        id: 2,
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
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg',
            name: 'Nathan James'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
            name: 'Melissa William'
        }
    },
    {
        id: 3,
        images: [
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/spacejoy-scaled.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-00.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/dining-01.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bathroom-02.jpg',
            'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bathroom-00.jpg',
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
        agent1: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Alice-Brian-1-210x210.jpg',
            name: 'Alice Brian'
        },
        agent2: {
            img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg',
            name: 'Nathan James'
        }
    },
    {
        id: 4,
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

const Property = () => {
    const { id } = useParams()

    return (
        <div className="container-fluid">
            <Navbar />
        </div>
    )
}
export default Property