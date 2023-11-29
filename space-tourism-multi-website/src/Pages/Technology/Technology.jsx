import { useState } from 'react';
import STYLES from './Technology.module.css';
import PageIndicatorHeader from '../../components/PageIndicatorHeader/PageIndicatorHeader';
import TECH_launch_IMG from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import TECH_capsule_IMG from '../../assets/technology/image-space-capsule-portrait.jpg';
import TECH_spaceport_IMG from '../../assets/technology/image-spaceport-portrait.jpg';
import TechnologyButton from '../../components/TechnologyButton/TechnologyButton';
import DATA from '../../components/data.json';

const techImgs = new Map([['Launch vehicle',TECH_launch_IMG], ['Space capsule',TECH_capsule_IMG], 
                            ['Spaceport',TECH_spaceport_IMG]]);

function renderSwitch(num) {
    switch(num) {
        case '1':
            return 'Launch vehicle';
        case '2':
            return 'Spaceport';
        case '3':
            return 'Space capsule';
        default:
            return 'Launch vehicle';
    }
}


function Technology() {
    const [technology_name,set_technology_name] = useState(DATA.technology[0].name);
    const [technology_description, set_technology_description] = useState(DATA.technology[0].description);
    const [technology_img,set_technology_img] = useState(TECH_launch_IMG);
    const mappedData = new Map(DATA.technology.map(tech => [tech.name, tech]));

    mappedData.forEach(tech => {
        tech.images.portrait = techImgs.get(tech.name);
    });

    

    function handleSelect(event){
        let selectedTechnology = renderSwitch(event.target.value); 
        const techData = mappedData.get(selectedTechnology);

        set_technology_name(techData.name);
        set_technology_description(techData.description);
        set_technology_img(techData.images.portrait);

        console.log('selectedTechnology====> ', selectedTechnology);
    }

    return (
        <section>
            <article className={STYLES.technology_article}>
                <PageIndicatorHeader pageNum={3} />
                <div className={STYLES.tech_terminology_Container}>
                    <div>
                        <TechnologyButton onSelect={handleSelect}>1</TechnologyButton>
                        <TechnologyButton onSelect={handleSelect}>2</TechnologyButton>
                        <TechnologyButton onSelect={handleSelect}>3</TechnologyButton>
                    </div>
                    <div className={STYLES.tech_terminology_right}>
                        <p className={STYLES.tech_term_p}>THE TERMINOLOGY…</p>
                        <h1 className={STYLES.tech_name}>{technology_name}</h1>
                        <p className={STYLES.tech_description}>{technology_description}</p>
                    </div>
                </div>
            </article>
            <div className={STYLES.technology_left_container}>
                <img src={technology_img} alt='This is a technology img' className={STYLES.technology_img_container} />
            </div>
        </section>
    )
}

export default Technology;