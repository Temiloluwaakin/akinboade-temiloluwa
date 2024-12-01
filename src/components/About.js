const About = () => {
    return ( 
        <div className="about">
            <div className="about-head">
                <h4>About me</h4>
                <p>Curious about me? Here you have it:</p>
            </div>
            <div className="about-me-dets">
                <p>
                    I'm a passionate, self-proclaimed full stack developer (React.js & Node.js) with more focus on 
                    front end development. 
                    I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, 
                    pixel perfect design, and writing clear, readable, highly performant code matters to me.
                </p>
                <p>
                    I began my journey as a web developer in 2020, and since then, I've continued to grow and evolve as a developer, 
                    taking on new challenges and learning the latest technologies along the way. Now, in my early twenties, 
                    4 years after starting my web development journey, I'm building cutting-edge web applications using modern 
                    technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Express and much more.
                </p>
                <p>
                    I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                </p>
                <p>
                    When I'm not in full-on developer mode, you can find me hovering around on twitter, 
                    witnessing the journey of early startups or enjoying some free time. 
                </p>
                <p>
                    Finally, some quick bits about me.
                </p>
                <div className="about-me-list">
                    <ul style={{textAlign:'left'}}>
                        <li>B.E. in Civil Engineering</li>
                        <li>Full time freelancer</li>
                        <li>Avid learner</li>
                    </ul>
                </div>
                One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
            </div>
        </div>
    );
}
 
export default About;