import laptopImg from '../../assets/code-laptop.jpg';
import './WelcomeContent.css'

export default function WelcomeContent() {
    return (
        <div id='welcome-content-area'>
            <div id='welcome-divs-left'>
                <div>
                    <h2 id='welcome-h2'>meraki</h2>

                    <p id='definition-txt'>
                        (n.) the soul, creativity or love put into something,
                        the essence of yourself that is put into your work.
                    </p>
                </div>

                <div id='about-txt-div'>
                    <p id='about-txt'>
                        A Project Planner built by a Developer, for Developers to 
                         help bring their dream projects to life.
                    </p>
                </div>
            </div>

            <img id='welcome-img' src={laptopImg} alt='Laptop with code' />
        </div>
    )
}