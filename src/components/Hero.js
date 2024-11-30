//import headshot from './images/headshot.JPG'
import location from './icons/Icon-location.png'
import profilepic from './images/profilpic.png'
//<div className="image-div"><div className="outer-img" style={{background:'#fffff'}}><img src={headshot} alt="headshot" />
import { SOCIAL_LINKS } from '../data';

const Hero = () => {

    return ( 
        <div className="hero">
            <div className="hero-text">
                <h1>Hi, i'm Temiloluwa</h1>
                <p>I'm a full stack developer (React.js & Node.js) with a focus on 
                    creating (and occasionally designing) exceptional digital experiences
                    that are fast, accessible, visually appealing, and responsive. 
                    Even though I have been creating web applications for over 7 years, 
                    I still love it as if it was something new.
                </p>
                <p style={{display:'flex',gap:'10px',alignItems:'center'}}>
                    <img src={location} alt='location-icon' />
                    <span>Lagos, Nigeria</span>
                </p>
                <p style={{display:'flex',gap:'10px',alignItems:'center'}}>
                    <span className='available-ping'></span>
                    <span>Available for new projects</span>
                </p>
                <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
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

            <div className="hero-image">
                <img src={profilepic} alt='profil-image' height={300}/>
            </div>
        </div>
     );
}
 
export default Hero;