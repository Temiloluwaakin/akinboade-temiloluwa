import './styles.css'
//import logo from './images/logo.png'
//import menu from './images/menu.png'
import { slideToggle } from "../components/slideToggle/index"
import { useRef } from 'react';
import { NAV_LINKS, Res_Nav_links } from '../data';
//import { Link } from 'react-router-dom';


const Header = ({scrollToSection}) => {

    const dropdowncaret = useRef(null);
    const logo = "<AT />"
    //const pdfUrl = '/components/files/AKINBOADE-TEMILOLUWA-CV.pdf'

    
    const handleClick = (passed) => {
        scrollToSection(passed.pass);
        slideToggle(dropdowncaret.current)
    };

    return ( 
        <div className="header">
            <div className="header-content">
                <div className='logo'>
                    <h1> {logo} </h1>
                </div>

                <div>
                    <div className='header-nav-links'>
                        <nav>
                            {NAV_LINKS.map((link) => (
                                <div key={link.label} className='nav-links'>
                                    <span onClick={() => scrollToSection(link.href)}>{link.label}</span>
                                </div>
                            ))}
                            <button onClick={() => window?.open('/files/AKINBOADE-TEMILOLUWA-CV.pdf', '_blank')}>
                                Download CV
                            </button>
                        </nav>
                    </div>
                    
                    <div className='dropdowncaret' onClick={() => slideToggle(dropdowncaret.current)}>
                        <span>
                            <h2>☰ </h2>
                        </span>
                    </div>
                </div>
            </div>


            <div ref={dropdowncaret} className="target-div thedropdown" style={{ display: "none"}}>
                {Res_Nav_links.map((paser) => (
                    <div key={paser.label} className='res-header'>
                        <span onClick={() => handleClick(paser)}>{paser.label}</span>
                    </div>
                ))}
                <button 
                    style={{background:"#000000",color: "#fff",border: "none",borderRadius: "10px",
                        padding: "10px 20px",cursor: "pointer"}}
                    onClick={() => window?.open('/files/AKINBOADE-TEMILOLUWA-CV.pdf', '_blank')}>
                    Download CV
                </button>
            </div>

        </div>
    );
}
 
export default Header;