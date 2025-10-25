import React from "react";
import styles from "./puzzle2.module.css"
import { scaleSVG, clicker, parrot } from "./polly.js"

export default function Puzzle2() {
    React.useEffect(() => {
        scaleSVG();
        clicker();
        parrot();
    }, []);

    return (
      <div id="pageWrapper" className={styles.pageWrapper}>
        <svg id="barrelMask" className={styles.barrelMask}>
            {/* save the values */}
            {/* <polygon id="green" points="1391,854 1382,759 1400,670 1458,664 1524,672,1542,738,1532,859,1509,880,1409,880"/>
            <polygon id="yellow" points="1304,634,1262,633,1226,639,1213,688,1225,763,1265,767,1304,760,1316,687"/>
            <polygon id="blue" points="554,621,579,626,587,657,581,705,554,711,529,707,521,668,529,626"/>
            <polygon id="red" points="332,784,370,776,376,716,368,661,331,660,293,663,283,716,292,779"/> */} 
            <polygon id="green" fillOpacity={0}/>
            <polygon id="yellow" fillOpacity={0}/>
            <polygon id="blue" fillOpacity={0}/>
            <polygon id="red" fillOpacity={0}/>
            
        </svg>
      </div>
    );
}