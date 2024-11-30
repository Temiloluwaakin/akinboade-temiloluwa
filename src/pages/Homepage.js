import { useRef } from "react";
import Header from "../components/Header";
import './styles.css'
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";

const Homepage = () => {

    const {heroRef,aboutRef,skillsRef,experienceRef,workRef,contactRef} = useRef(null);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {

            element.scrollIntoView({ behavior: 'smooth'});
        }
    };

    return ( 
        <div className="homepage">
            <Header scrollToSection={scrollToSection} />
            
            <div className="homepage-sections">
                <section id="hero" ref={heroRef}>
                    <Hero />
                </section>

                <section id="work" ref={workRef}>
                    <Work />
                </section>

                <section id="about" ref={aboutRef}>
                    <About />
                </section>

                <section id="skills" ref={skillsRef}>
                    <Skills />
                </section>

                <section id="experience" ref={experienceRef}>
                    <h1>experience section</h1><br/>
                </section>

                <section id="contact" ref={contactRef}>
                    <Contact />
                </section>
            </div>
        </div>
    );
}
 
export default Homepage;