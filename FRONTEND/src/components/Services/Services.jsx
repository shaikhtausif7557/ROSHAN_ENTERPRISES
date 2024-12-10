import './Services.css';
import polish from '../../assets/marblepolish.jpg';
import diamond from '../../assets/diamondmarble.jpg';
import repair from '../../assets/marblerepair-transformed.jpeg';
import patch from '../../assets/marblepatch.jpg';
import care from '../../assets/marblecare.jpg';
import clean from '../../assets/clean.jpg';

function Services() {
    return (
        <div id='services'>
            <div id='header'>
                <h1>Our Services</h1>
                <p>Discover our expert services designed to restore, polish, and enhance your surfaces with the utmost precision and quality.</p>
            </div>
            <div id='service_list'>
                <div className='card'>
                    <div className='img'>
                        <img src={polish} alt="Marble Polish" />
                    </div>
                    <section>
                        <h1>Marble Polish</h1>
                        <p>Restore your marble surfaces to their original shine with our specialized polishing techniques, bringing out their natural beauty and durability.</p>
                    </section>
                </div>
                <div className='card'>
                    <div className='img'>
                        <img src={diamond} alt="Floor Polishing" />
                    </div>
                    <section>
                        <h1>Diamond Polishing</h1>
                        <p>Achieve a mirror-like finish on floors with our diamond polishing service, enhancing elegance and extending the life of your surfaces.</p>
                    </section>
                </div>
                <div className='card'>
                    <div className='img'>
                        <img src={repair} alt="Marble Repairs" />
                    </div>
                    <section>
                        <h1>Marble Repair</h1>
                        <p>Comprehensive repair services for Italian marble, tackling cracks, stains, and spots to restore the flawless look of your surfaces.</p>
                    </section>
                </div>
                <div className='card'>
                    <div className='img'>
                        <img src={patch} alt="Patch Removal" />
                    </div>
                    <section>
                        <h1>Patch Removal</h1>
                        <p>Eliminate unsightly patches and imperfections on Italian marble, ensuring a seamless, polished appearance throughout.</p>
                    </section>
                </div>
                <div className='card'>
                    <div className='img'>
                        <img src={care} alt="Marble & Tile Care" />
                    </div>
                    <section>
                        <h1>Stone Care</h1>
                        <p>Professional care for marble, tiles, and granite surfaces, preserving their natural finish and adding years to their durability.</p>
                    </section>
                </div>
                <div className='card'>
                    <div className='img'>
                        <img src={clean} alt="Tile Cleaning" />
                    </div>
                    <section>
                        <h1>Tile Cleaning</h1>
                        <p>Intensive tile cleaning services to remove dirt and grime, revitalizing the look of your tiles and enhancing their shine.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Services;
