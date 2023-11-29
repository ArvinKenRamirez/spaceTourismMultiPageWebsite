import { useState } from 'react';
import Radio from '@mui/material/Radio';
import STYLES from './Crew.module.css';
import PageIndicatorHeader from '../../components/PageIndicatorHeader/PageIndicatorHeader';
import CREW_1_IMG from '../../assets/crew/image-douglas-hurley.webp';
import CREW_2_IMG from '../../assets/crew/image-mark-shuttleworth.webp';
import CREW_3_IMG from '../../assets/crew/image-victor-glover.webp';
import CREW_4_IMG from '../../assets/crew/image-anousheh-ansari.webp';
import DATA from '../../components/data.json';

const crewImgs = new Map([['Douglas Hurley',CREW_1_IMG], ['Mark Shuttleworth',CREW_2_IMG], 
                            ['Victor Glover',CREW_3_IMG], ['Anousheh Ansari',CREW_4_IMG]]);


function Crew() {
    const [selectedCrew, set_selectedCrew] =  useState(DATA.crew[0].name);
    const [crewRole, set_crewRole] = useState(DATA.crew[0].role);
    const [crewBio, set_crewBio] = useState(DATA.crew[0].bio);
    const [crewImg, set_crewImg] = useState(CREW_1_IMG);
    const mappedData = new Map(DATA.crew.map(crew => [crew.name, crew]));

    mappedData.forEach(crew => {
        crew.images.webp = crewImgs.get(crew.name);
    });


    const handleChange = (event) => {
        let selectedCrew = event.target.value;
        const crewData = mappedData.get(selectedCrew);

        set_selectedCrew(selectedCrew);
        set_crewRole(crewData.role);
        set_crewBio(crewData.bio);
        set_crewImg(crewData.images.webp);
    };

    const controlProps = (item) => ({
        checked: selectedCrew === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    
    const crewMember_img = crewImg;
    
    return (
        <section>
            <article className={STYLES.crew_article}>
                <PageIndicatorHeader pageNum={2} />
                <h3 className={STYLES.crew_h3}>{crewRole}</h3>
                <h1 className={STYLES.crew_h1}>{selectedCrew}</h1>
                <div className={STYLES.crew_p_container}>
                    <p className={STYLES.crew_p}>{crewBio}</p>
                </div>
                <div className={STYLES.crew_radiobtn_container}>
                    <Radio {...controlProps('Douglas Hurley')} color="default" />
                    <Radio {...controlProps('Mark Shuttleworth')} color="default" />
                    <Radio {...controlProps('Victor Glover')} color="default" />
                    <Radio {...controlProps('Anousheh Ansari')} color="default" />
                </div>
            </article>
            <div className={STYLES.crew_left_container}>
                <img src={crewMember_img} alt={selectedCrew} className={STYLES.crew_img_container}  />
            </div>
        </section>
    )
}

export default Crew;