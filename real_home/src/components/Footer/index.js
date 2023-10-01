import React from "react";
import './index.css'
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoYoutube, BiSolidCopyright, BiPhone, BiLogoWhatsapp, BiMailSend } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <div className="d-flex justify-content-between">
                <img src="https://ultra-realhomes.b-cdn.net/wp-content/themes/realhomes/assets/ultra/images/logo.png" alt="img" />
                <div>
                    <BiLogoFacebookCircle className="footer-logos" />
                    <AiFillTwitterCircle className="footer-logos" />
                    <BiLogoInstagramAlt className="footer-logos" />
                    <BiLogoYoutube className="footer-logos" />
                </div>
            </div>
            <div className="d-flex">
                <div className="col-xl-6 d-flex ">
                    <div className="col-xl-8 p-3 pt-5">
                        <p>Experience the epitome of flexibility and empower your real estate ventures with our feature-rich theme.</p>
                        <p>Effortlessly adapt to various property types and market demands with our comprehensive solution.</p>
                    </div>
                    <div className="col-xl-4 p-3 pt-5">
                        <p>Home</p>
                        <p>Properties Listing</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className="footer-need-help-container d-flex">
                <h5 className="footer-need-help-heading">Need Help?</h5>
                <button className="footer-need-help-button d-flex" type="button"><BiPhone className="footer-need-help-icons" /><p className="footer-need-help-button-p">1-800-555-4321</p></button>
                <button className="footer-need-help-button d-flex" type="button"><BiLogoWhatsapp className="footer-need-help-icons" /><p className="footer-need-help-button-p">1-800-555-4321</p></button>
                <button className="footer-need-help-button d-flex" type="button"><BiMailSend className="footer-need-help-icons" /><p className="footer-need-help-button-p">hello@yoursite.com</p></button>
            </div>
            <div className="d-flex justify-content-between mt-5 p-3">
                <div className="d-flex">
                    <BiSolidCopyright className="mt-1" />
                    <p>2023. All rights reserved.</p>
                </div>
                <div>
                    <p>Designed by <b>Madala Shashikumar</b></p>
                </div>

            </div>
        </div>
    )
}
export default Footer