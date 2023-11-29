import * as React from 'react';
import STYLES from './PageIndicatorHeader.module.css';



function PageIndicatorHeader(props) {
    let pageNumber;
    let pagePath;


    if(props.pageNum === 1){
        pageNumber = '01';
        pagePath = 'Pick your destination';
    }else if(props.pageNum === 2){
        pageNumber = '02';
        pagePath = 'Meet your crew';
    }else if(props.pageNum === 3){
        pageNumber = '03';
        pagePath = 'SPACE LAUNCH 101';
    }else{
        return (<h5 className={STYLES.pageIndicatorHeader_number}>INVALID INPUT</h5>)
    }
    
    return (
        <div className={STYLES.pageIndicatorHeader_container}>
            <h5 className={STYLES.pageIndicatorHeader_number}>{pageNumber}</h5>
            <h5 className={STYLES.pageIndicatorHeader_text}>{pagePath}</h5>
        </div>
    )
}

export default PageIndicatorHeader;