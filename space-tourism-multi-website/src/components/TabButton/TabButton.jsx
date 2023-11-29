import STYLES from './TabButton.module.css';


export default function TabButton(props){
    return(
        <li className={STYLES.tabButton_li}>
            <button value={props.children} onClick={props.onSelect} className={STYLES.destination_ul}>
                {props.children}
            </button>
        </li>
    );
}