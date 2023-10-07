import React from "react";
import { BiUserCircle, BiComment } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <form className="agent-form-container col-xl-8 m-auto mt-5">
                <h4 className="m-4"><b>Contact Us</b></h4>
                <div className="agent-input-container mb-4">
                    <BiUserCircle className="agent-input-logo" />
                    <input type="text" className="agent-input-input" placeholder="Your Name" />
                </div>
                <div className="agent-input-container mb-4">
                    <AiOutlineMail className="agent-input-logo" />
                    <input type="text" className="agent-input-input" placeholder="Your Email" />
                </div>
                <div className="agent-input-container mb-4">
                    <BsTelephone className="agent-input-logo" />
                    <input type="text" className="agent-input-input" placeholder="Your Phone" />
                </div>
                <div className="agent-input-container mb-4 d-flex">
                    <BiComment className="agent-input-logo" />
                    <br />
                    <textarea rows={7} className="agent-input-textarea w-100" placeholder="Your Message" />
                </div>
                <button className="agent-send-btn w-25" type="button">Send Message</button>
            </form>
            <Footer />
        </div>
    )
}
export default Contact