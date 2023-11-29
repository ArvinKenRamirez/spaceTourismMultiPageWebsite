import STYLE from './TechnologyButton.module.css';




export default function TechnologyButton(props){

    return(
        <div>
            <button value={props.children} onClick={props.onSelect} 
                className={STYLE.techBtnStyle_default} >
                {props.children}
            </button>
        </div>
    );
}


