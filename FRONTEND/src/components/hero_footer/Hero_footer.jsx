import './style.css'
function Hero_footer(){
    const scrollToAbout = () => {
        document.getElementById('Aboutus').scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <div id='footer'>
            <h1>The ROSHAN ENTERPRISES helps you to Reach Your Goals</h1>
            <p>Roshan Enterprises is an Indian Company, Overall experience 20 Years in real estate construction market in Maharashtra (Mumbai, Pune) .</p>
            <div onClick={scrollToAbout}>Know More</div>

        </div>
    );
}
export default Hero_footer;