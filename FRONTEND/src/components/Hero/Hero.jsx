import logo from '../../assets/mainphoto.png'
import './Hero.css'
function Hero() {
    const scrollToServices = () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div id="Hero">
            <div id='content-left'>
                <h1><span>CIVIL</span> <br />
                    <span>INTERIOR </span><br />
                    <span>CONTRACTOR</span></h1>
                    <button onClick={scrollToServices}>Explore Now</button>
            </div>
            <div id='content-right'>

            <img src={logo} alt="" />
            </div>
        </div>
    );
}
export default Hero;