import React from 'react'
import './index.css'
import Navbar from '../Navbar'
import { CiCalendarDate } from 'react-icons/ci'
import { BsTelephone, BsPrinter } from 'react-icons/bs'
import { BiComment, BiUserCircle, BiLogoWhatsapp } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import Footer from '../Footer'

const Blogs = [
    {
        id: 1,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/blog-post-1.jpg',
        date: 'June 16, 2022',
        type: 'Luxury',
        title: 'As The Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool',
        paragraph: 'Enthusiastically disintermediate progressive innovation before high-payoff metrics. Intrinsicly generate sticky services without B2B e-services. Competently revolutionize parallel applications with plug-and-play meta-services. Competently leverage other’s global outsourcing for superior deliverables.',
    },
    {
        id: 2,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/francesca-tosolini-LL9V0iMpStM-unsplash-1-1240x720.jpg',
        date: 'June 15, 2022',
        type: 'Luxury',
        title: 'Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool',
        paragraph: 'Competently harness enterprise vortals via revolutionary e-tailers. Monotonectally recaptiualize one-to-one relationships whereas ubiquitous core competencies. Proactively actualize proactive methodologies after process-centric mindshare.',
    },
    {
        id: 3,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/blog-image-3-1.jpg',
        date: 'June 13, 2022',
        type: 'Market Trends',
        title: 'Here’s How First-time Buyers Can Keep Their Cool As The Real Estate Market Heats Up',
        paragraph: 'Uniquely customize future-proof niche markets via worldwide users. Proactively negotiate user-centric schemas after fully researched bandwidth. Intrinsically actualize client-centric resources before customized products.',
    },
    {
        id: 4,
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/blog-rental-income-1240x720.jpg',
        date: 'June 12, 2022',
        type: 'Market Trends',
        title: 'Dramatically benchmark corporate leadership via scalable deliverables',
        paragraph: 'Dramatically benchmark corporate leadership via scalable deliverables. Conveniently drive integrated testing procedures rather than just in time “outside the box” thinking. Credibly deploy synergistic relationships via extensible architectures. Conveniently conceptualize goal-oriented portals with vertical technologies. Quickly repurpose strategic markets without empowered convergence.',
    },
]

const Agents = [
    {
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg',
        name: 'Melissa William'
    },
    {
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/John-David.jpg',
        name: 'John David'
    },
    {
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Nathan-James-210x210.jpg',
        name: 'Nathan James'
    },
    {
        img: 'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Alice-Brian-1-210x210.jpg',
        name: 'Alice Brian'
    },
]

const AllBlogs = () => {
    return (
        <div className='container-fluid'>
            <Navbar />
            <div className='news-main-container mt-3 d-flex'>
                <div className='news-container-1 col-xl-8 p-2' >
                    <h3><b>News</b></h3>
                    <p className='news-para'>Check out market updates</p>
                    <ul className='p-0'>
                        {Blogs && Blogs.map((each) => {
                            return (
                                <li className='blog-li' key={each.id}>
                                    <div className='blog-li-img-container'>
                                        <img className='w-100 blog-li-img' src={each.img} alt='img' />
                                        <div className='jhon-text-container d-flex'>
                                            <img className='jhon-img' src='https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=150&d=mm&r=g' alt='img' />
                                            <p className='jhon-text'>By Jhon</p>
                                        </div>
                                    </div>
                                    <div className='blog-main-text-container'>
                                        <p className='blog-main-date'> <CiCalendarDate className='blog-main-date-logo' /> {each.date} <span className='blog-main-type'>{each.type}</span></p>
                                        <h4><b>{each.title}</b></h4>
                                        <p className='blog-main-para'>{each.paragraph}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='col-xl-4 pt-4'>
                    <>
                        {Agents && Agents.map((each) => {
                            return (
                                <>
                                    <div className="agent-sub-container-1 d-flex">
                                        <div className="agent-img-container col-xl-5 p-3 text-end">
                                            <img className="agent-img" src={each.img} alt="img" />
                                            <div className="text-end">
                                                <p className="agent-text-para">Office</p>
                                                <p className="agent-text-para">Mobile</p>
                                                <p className="agent-text-para">Fax</p>
                                                <p className="agent-text-para">WhatsApp</p>
                                                <p className="agent-text-para">Email</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 p-2">
                                            <p className="agent-title">Agent</p>
                                            <h4 className="agent-heading">{each.name}</h4>
                                            <p className="agent-view-my">View My Listings</p>
                                            <div className="agent-contact-container">
                                                <p className="agent-contact-paragraph"><BsTelephone className="agent-contact-icon" /> 1-222-333-4444</p>
                                                <p className="agent-contact-paragraph"><BsTelephone className="agent-contact-icon" /> 1-234-456-7892</p>
                                                <p className="agent-contact-paragraph"><BsPrinter className="agent-contact-icon" /> 1-333-444-5555</p>
                                                <p className="agent-contact-paragraph"><BiLogoWhatsapp className="agent-contact-icon" /> 1-222-333-4422</p>
                                                <p className="agent-contact-paragraph"><AiOutlineMail className="agent-contact-icon" /> robot@inspirythemes.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <h5 className='m-3 mt-5'><b>Contact Us</b></h5>
                        <form className="agent-form-container mt-4">
                            <div className="agent-input-container">
                                <BiUserCircle className="agent-input-logo" />
                                <input type="text" className="agent-input-input" placeholder="Name" />
                            </div>
                            <div className="agent-input-container">
                                <AiOutlineMail className="agent-input-logo" />
                                <input type="text" className="agent-input-input" placeholder="Email" />
                            </div>
                            <div className="agent-input-container">
                                <BsTelephone className="agent-input-logo" />
                                <input type="text" className="agent-input-input" placeholder="Phone" />
                            </div>
                            <div className="agent-input-container d-flex">
                                <BiComment className="agent-input-logo" />
                                <br />
                                <textarea rows={7} className="agent-input-textarea" placeholder="Message" />
                            </div>
                            <button className="agent-send-btn" type="button">Send Message</button>
                        </form>
                    </>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AllBlogs