import React from "react";

export function nextPage() {
    const riddle1 = document.getElementById("riddle");
    const riddle2 = document.getElementById("riddle2");
    riddle1.classList.remove("riddleIn"); // removes from previous animation
    riddle1.classList.add("riddleOut");
    setTimeout(() => {
        riddle1.classList.add("hidden");
        riddle1.classList.remove("riddleOut");

        riddle2.classList.remove("hidden");
        riddle2.classList.add("riddleIn");
    }
    , 1000);
}

export function prevPage() {
    const riddle1 = document.getElementById("riddle");
    const riddle2 = document.getElementById("riddle2");
    riddle2.classList.remove("riddleIn"); // removes from previous animation
    riddle2.classList.add("riddleOut");
    setTimeout(() => {
        riddle2.classList.remove("riddleOut");
        riddle2.classList.add("hidden");
        riddle1.classList.remove("hidden");
        riddle1.classList.add("riddleIn");
    }
    , 1000);
}

export function dragAndRotate() {
    const wrapper = document.getElementById("bucket-wrapper");
    const bucket = document.getElementById("bucket");
    const handle = document.getElementById("handle");
  
    let isDragging = false;
    let isRotating = false;
  
    let offsetX = 0;
    let offsetY = 0;
    let currAngle = 0;
    let startAngle = 0;
    let startRadians = 0;
  
    // DRAG
    wrapper.addEventListener("mousedown", (e) => {
        if (e.target === handle) return;

        isDragging = true;
        const rect = wrapper.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        wrapper.style.cursor = "grabbing";
    });
  
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        wrapper.style.left = `${newX}px`;
        wrapper.style.top = `${newY}px`;
      }
  
      if (isRotating) {
        const rect = bucket.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
  
        const changeX = e.clientX - centerX;
        const changeY = e.clientY - centerY;
  
        let deltaRadians =  Math.atan2(changeY, changeX) - startRadians;
        currAngle = startAngle + (180 / Math.PI) * deltaRadians;
  
        bucket.style.transform = `rotate(${currAngle}deg)`;
      }
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
      isRotating = false;
      wrapper.style.cursor = "grab";
    });
  
    // ROTATE
    handle.addEventListener("mousedown", (e) => {
      const rect = bucket.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
  
      const changeX = e.clientX - centerX;
      const changeY = e.clientY - centerY;
  
      startRadians = Math.atan2(changeY, changeX);
      startAngle = currAngle;
      isRotating = true;
    });
}