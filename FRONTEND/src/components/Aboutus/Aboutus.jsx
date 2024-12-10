import './Aboutus.css';
import aboutlogo from '../../assets/aboutt.png.jpg';

function Aboutus() {
    return (
        <div id="about">
            <div id='left'>
                <h1>Welcome to <span>ROSHNA</span> Enterprises</h1>
                <h3>Your Trusted Partner in Marble Care</h3>
                <p>ROSHNA Enterprises is dedicated to preserving the elegance and durability of your marble surfaces. With expertise in marble polishing, restoration, and maintenance, we bring back the natural beauty and shine of your spaces.</p>
                <p>Our team uses advanced techniques to revitalize marble, granite, and tile surfaces, ensuring quality and longevity. Join us in our commitment to exceptional craftsmanship, where your vision for refined spaces becomes a reality.</p>
            </div>
            <div id='right'>
                <img src={aboutlogo} alt="About ROSHNA Enterprises" />
            </div>
        </div>
    );
}

export default Aboutus;
