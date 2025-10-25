import React from "react"
import classNames from 'classnames'
import styles from './puzzle1.module.css'
import { prevPage, nextPage, dragAndRotate } from "./helpers.js"

export default function Puzzle1() {
  React.useEffect(() => {
    dragAndRotate();
  }, []);

  let isChangingPage = false;

  function handleNextPage() {
    if (isChangingPage) {
      return;
    }
    isChangingPage = true;
    nextPage();
    setTimeout(() => {
      isChangingPage = false;
    }, 2000);
  }

  function handlePrevPage() {
    if (isChangingPage) {
      return;
    }
    isChangingPage = true;
    prevPage();
    setTimeout(() => {
      isChangingPage = false;
    }, 2000);
  }
  

  return (
    <div className={styles.pageWrapper}>
    <div id="bucketWrapper" className={styles.bucketWrapper}><div id="bucket" className={styles.bucket}><div id="handle" className={styles.handle}></div></div></div>
    <div id="content" className={styles.content} draggable="false">
      <div id="riddle" className={styles.riddle}>
        Legend tells of Blackbeard's stash,<br/>
        a buried chest, a coin-filled cache.<br/>
        Rubies, gold, jewels a'plenty,<br/>
        sought by all, not found by any.<br/>
        But if you try and prove your measure,<br/>
        perhaps you'll finally find his treasure!<br/>
      </div>
    <div id="riddle2" className={classNames(styles.hidden, styles.riddle2)}>
        If you seek glory, do not fear,<br/>
        For Blackbeard left clues for all to hear,<br/>
        Clues which truly test your zeal,<br/>
        The first of which I now reveal,<br/>
        Blackbeard's ship, his one true love,<br/>
        Should be named, in the search bar above.<br/>
        <em style={{fontSize: "12px"}}>Riddle solutions should be entered as a new page path</em><br/>
        <em style={{fontSize: "12px", position: "relative", bottom: "30px"}}>(e.g. puzzleSite.net/SOLUTION)</em>
      </div>
      <div id="nextArrow" className={styles.nextArrow} onClick={handleNextPage}></div>
      <div id="prevArrow" className={styles.prevArrow} onClick={handlePrevPage}></div>
    </div>
    </div>
  )
}