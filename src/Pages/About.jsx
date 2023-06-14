const About = () => {

    return (
        <div className="about__container">
            <h2 className="about-title">Developer:</h2>
            <ul className="developer__list">
                <li className="developer__item">Dubovik Nikita</li>
            </ul>
            <h2 className="about-title">Technology Stack:</h2>
            <ul className="stack__list">
                <li className="stack__item react">React</li>
                <li className="stack__item node">Node.js</li>
                <li className="stack__item express">Express</li>
                <li className="stack__item mongo">MongoDB</li>
                <li className="stack__item router">React router</li>
                <li className="stack__item axios">Axios</li>
                <li className="stack__item mongoose">Mongoose</li>
            </ul>
        </div>
    );
};

export default About;