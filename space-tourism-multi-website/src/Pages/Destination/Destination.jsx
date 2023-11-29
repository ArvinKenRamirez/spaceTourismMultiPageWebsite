import { useState } from 'react';
import STYLES from './Destination.module.css';
import MOON_img from '../../assets/destination/image-moon.webp';
import MARS_img from '../../assets/destination/image-mars.webp';
import EUROPA_img from '../../assets/destination/image-europa.webp';
import TITAN_img from '../../assets/destination/image-titan.webp';
import PageIndicatorHeader from '../../components/PageIndicatorHeader/PageIndicatorHeader';
import TabButton from '../../components/TabButton/TabButton';
import DATA from '../../components/data.json';

const planetImgs = new Map([['Moon',MOON_img], ['Mars',MARS_img], ['Europa',EUROPA_img], ['Titan',TITAN_img]]);


function Destination() {
    
    const [selected_Planet, set_selected_Planet] = useState(DATA.destinations[0].name);
    const [selected_planet_description, set_selected_planet_description] = useState(DATA.destinations[0].description);
    const [planetDistance, set_planetDistance] = useState(DATA.destinations[0].distance);
    const [planetTravel, set_planetTravel] = useState(DATA.destinations[0].travel);
    const [planetImg, set_planetImg] = useState(MOON_img);
    const mappedData = new Map(DATA.destinations.map(planet => [planet.name, planet]));

    mappedData.forEach(planet => {
        planet.images.webp = planetImgs.get(planet.name);
    });


    function handleSelect(event){
        let selectedPlanet = event.target.value;
        const planetData = mappedData.get(selectedPlanet);

        // selected_Planet = selectedPlanet; this updates data but not renders in screen
        // selected_planet_description = planetData.description;
        set_selected_Planet(selectedPlanet);
        set_selected_planet_description(planetData.description);
        set_planetDistance(planetData.distance);
        set_planetTravel(planetData.travel);
        set_planetImg(planetData.images.webp);
        

        console.log(selected_Planet,'/n Data===>', DATA.destinations, '/n /n', selected_planet_description);
    }

    return (
        <section className={STYLES.destination_section}>
            {/* left side */}
            <div className={STYLES.destination_left_container}>
                <PageIndicatorHeader pageNum={1} />
                <img src={planetImg} alt={selected_Planet} className={STYLES.img_container}></img>
            </div>
            {/* right side */}
            <article className={STYLES.destination_article}>
                <menu className={STYLES.destination_tabs}>
                    <TabButton onSelect={handleSelect}>Moon</TabButton>
                    <TabButton onSelect={handleSelect}>Mars</TabButton>
                    <TabButton onSelect={handleSelect}>Europa</TabButton>
                    <TabButton onSelect={handleSelect}>Titan</TabButton>
                </menu>
                <div>
                    <h1 className={STYLES.destination_h1}>{selected_Planet}</h1>
                    <div className={STYLES.destination_p_container}>
                        <p className={STYLES.description_p}>{selected_planet_description}</p>
                    </div>
                </div>
                <hr className={STYLES.destination_hr}/>
                <div className={STYLES.destination_distance_time_container}>
                    <div className={STYLES.destination_distance_container}>
                        <p className={STYLES.destination_DT_p}>AVG. DISTANCE</p>
                        <h2 className={STYLES.destination_DT_h2}>{planetDistance}</h2>
                    </div>
                    <div className={STYLES.destination_distance_time}>
                        <p className={STYLES.destination_DT_p}>Est. travel time</p>
                        <h2 className={STYLES.destination_DT_h2}>{planetTravel}</h2>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Destination;