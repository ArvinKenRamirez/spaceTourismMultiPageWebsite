import STYLES from './ExploreButton.module.css';
import { Link } from 'react-router-dom';

function ExploreButton() {
    return (
        <Link to="/destination" className={STYLES.explore_button_container} style={{cursor: "default"}}>
            <div className={STYLES.explore_button}>
                <h3 className={STYLES.explore_text}>Expolore</h3>
            </div>
        </Link>
    )
}

export default ExploreButton;