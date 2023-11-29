import STYLES from './Home.module.css';
import ExploreButton from '../../components/ExploreButton/ExploreButton';


function Home() {
    return (
        <section className={STYLES.home_article_container}>
            {/* left side */}
            <article className={STYLES.home_article}> 
                <h4 className={STYLES.home_h4}>
                    SO, YOU WANT TO TRAVEL TO
                </h4>
                <h1 className={STYLES.home_h1}>Space</h1>
                <p className={STYLES.home_p}>
                    Let's face it; if you want to go to space, you might
                    as well genuinely go to outer space and not hover
                    kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world
                    experience!
                </p>
            </article>
            {/* right side */}
            <ExploreButton />
        </section>
    )
}

export default Home;