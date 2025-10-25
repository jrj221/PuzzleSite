import React from "react";
import styles from "./puzzle2.module.css"
import { parrot } from "./polly.js"

export default function Puzzle2() {
    React.useEffect(() => {
        parrot();
    }, []);

    return (
      <div className={styles.pageWrapper}>

      </div>
    );
}