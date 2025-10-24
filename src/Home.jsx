import React from "react"
import './App.css'
import { prevPage, nextPage, dragAndRotate } from "./helpers.js"

export default function Home() {
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
    <>
    <div id="bucket-wrapper"><div id="bucket"><div id="handle"></div></div></div>
    <div id="content" draggable="false">
      <div id="riddle">
        Legend tells of Blackbeard's stash,<br/>
        a buried chest, a coin-filled cache.<br/>
        Rubies, gold, jewels a'plenty,<br/>
        sought by all, not found by any.<br/>
        But if you try and prove your measure,<br/>
        perhaps you'll finally find his treasure!<br/>
      </div>
      <div id="riddle2" className="hidden">
        Legend tells of JACKS's stash,<br/>
        a buried chest, a coin-filled cache.<br/>
        Rubies, gold, jewels a'plenty,<br/>
        sought by all, LSDJF found by any.<br/>
        But if you try and prove your measure,<br/>
        perhaps you'll finally find his treasure!<br/>
      </div>
      <div id="nextArrow" onClick={handleNextPage}></div>
      <div id="prevArrow" onClick={handlePrevPage}></div>
    </div>
    </>
  )
}