import message from './icons/message-icon.png'
import copy from './icons/copy-icon.png'
import phone from './icons/phone-icon.png'
import { SOCIAL_LINKS } from '../data';
import { useState } from 'react';

let phoneNo = '+2348069820002'
let email = 'akinboade12345@gmail.com';

const Contact = () => {
    const [copied, setCopied] = useState(null); // Tracks which item is copied
    const [showModal, setShowModal] = useState(false); // Tracks modal visibility

    const copyToClipboard = (value, type) => {
        navigator.clipboard.writeText(value).then(() => {
        setCopied(type);
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false); // Hide modal after 3 seconds
        }, 1500);
        });
    };


    return ( 
        <div className="contact">
            <div className="contact-head">
                <h4>Get in Touch</h4>
                <p>What’s next? Feel free to reach out to me if you are looking for a developer, 
                    have a query, or simply want to connect.
                </p>
            </div>

            <div className='contact-dets'>
                <div className='conts'>
                    <img src={message} alt="message-icon"/>
                    <h1>{email}</h1>
                    <span className='icon-cont'>
                        <img 
                            src={copy} 
                            alt="copy-icon"
                            style={{ cursor: "pointer"}}
                            onClick={() => copyToClipboard(email, "email")}
                        />
                        {showModal && copied === "email" && (
                            <div className='copy'>
                            Copied!
                            </div>
                        )}
                    </span>
                </div>

                <div className='conts'>
                    <img src={phone} alt="phone-icon"/>
                    <h1>{phoneNo}</h1>
                    <span className='icon-cont'>
                        <img 
                            src={copy} 
                            alt="copy-icon"
                            style={{cursor:'pointer'}}
                            onClick={() => copyToClipboard(phoneNo, "phone")}
                        />
                        {showModal && copied === "phone" && (
                            <div className='copy'>
                            Copied!
                            </div>
                        )}
                    </span>
                    
                </div>

                <p style={{fontSize:"20px",marginTop:'30px'}}>You may also find me on these platforms!</p>

                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'15px'}}>
                    {SOCIAL_LINKS.map((socialLink) => (
                        <img 
                            src={socialLink.icon} 
                            alt='github-logo' 
                            onClick={() => window.open(socialLink.url, '_blank')}
                            style={{cursor:'pointer'}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Contact;