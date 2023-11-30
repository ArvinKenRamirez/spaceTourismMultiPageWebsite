import SPACE_LOGO from '../../assets/shared/logo.svg';
// import MENU_LOGO from '../../assets/shared/icon-hamburger.svg';
import STYLES from './NavMenu.module.css';
import { Link, useLocation } from 'react-router-dom';



function NavMenu() {
    const location = useLocation();
    const pathName = location.pathname;
    const homePath = (pathName === '/') ? STYLES.home_navLinks_item_active : STYLES.home_navLinks_item;
    const destinationPath = (pathName === '/destination')  ? STYLES.home_navLinks_item_active : STYLES.home_navLinks_item;
    const crewPath = (pathName === '/crew')  ? STYLES.home_navLinks_item_active : STYLES.home_navLinks_item;
    const techPath = (pathName === '/technology')  ? STYLES.home_navLinks_item_active : STYLES.home_navLinks_item;
    return (
        <nav className={STYLES.home_nav_container}>
            <div className={STYLES.home_logo_button_container}>
                <Link to="/" ><img className={STYLES.home_logo_button} src={SPACE_LOGO} alt="this is Space Logo" /></Link>    
            </div>
            
            <div className={STYLES.home_navLinks_container}>
                <hr className={STYLES.navMenu_hr} />
                <Link className={homePath} to="/"><strong>00</strong> HOME</Link>
                <Link className={destinationPath} to="/destination"><strong>01</strong> DESTINATION</Link>
                <Link className={crewPath} to="/crew"><strong>02</strong> CREW</Link>
                <Link className={techPath} to="/technology"><strong>03</strong> TECHNOLOGY</Link>
            </div>
             
            {/* <img className={STYLES.menu_logo_button} src={MENU_LOGO} alt="this is Menu Logo" /> */}
            
        </nav>
        // humburger dito
    )
}

export default NavMenu;