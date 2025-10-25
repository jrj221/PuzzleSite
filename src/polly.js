export function scaleSVG() {
    // Creates image to access natural dimensions of the background image
    const img = new Image();
    img.src = "./pirateDeck.png"
    img.onload = () => {
        const naturalX = img.naturalWidth;
        const naturalY = img.naturalHeight;

        const container = document.getElementById("barrelMask");
        const rect = container.getBoundingClientRect();
        const containerX = rect.width;
        const containerY = rect.height;

        // Calculates how much the background image was scaled by to preserve aspect ratio but be contained in the page
        const scalingRatio = Math.min(containerX/naturalX, containerY/naturalY);
        const greenBarrel = document.getElementById("green");
        const yellowBarrel = document.getElementById("yellow");
        const blueBarrel = document.getElementById("blue");
        const redBarrel = document.getElementById("red");

        // Calculates the offsets of each point since we center the background image
        const scaledX = naturalX * scalingRatio;
        const scaledY = naturalY * scalingRatio;
        const offsetX = (containerX - scaledX)/2;
        const offsetY = (containerY - scaledY)/2;

        // Calculates and applies scaled points to the SVG
        greenBarrel.setAttribute("points", `
            ${scalingRatio * 1391 + offsetX},${scalingRatio * 854 + offsetY},
            ${scalingRatio * 1382 + offsetX},${scalingRatio * 759 + offsetY},
            ${scalingRatio * 1400 + offsetX},${scalingRatio * 670 + offsetY},
            ${scalingRatio * 1458 + offsetX},${scalingRatio * 664 + offsetY},
            ${scalingRatio * 1524 + offsetX},${scalingRatio * 672 + offsetY},
            ${scalingRatio * 1542 + offsetX},${scalingRatio * 738 + offsetY},
            ${scalingRatio * 1532 + offsetX},${scalingRatio * 859 + offsetY},
            ${scalingRatio * 1509 + offsetX},${scalingRatio * 880 + offsetY},
            ${scalingRatio * 1409 + offsetX},${scalingRatio * 880 + offsetY}`);          
        yellowBarrel.setAttribute("points", `
            ${scalingRatio * 1304 + offsetX},${scalingRatio * 634 + offsetY},
            ${scalingRatio * 1262 + offsetX},${scalingRatio * 633 + offsetY},
            ${scalingRatio * 1226 + offsetX},${scalingRatio * 639 + offsetY},
            ${scalingRatio * 1213 + offsetX},${scalingRatio * 688 + offsetY},
            ${scalingRatio * 1225 + offsetX},${scalingRatio * 763 + offsetY},
            ${scalingRatio * 1265 + offsetX},${scalingRatio * 767 + offsetY},
            ${scalingRatio * 1304 + offsetX},${scalingRatio * 760 + offsetY},
            ${scalingRatio * 1316 + offsetX},${scalingRatio * 687 + offsetY}`);              
        blueBarrel.setAttribute("points", `
            ${scalingRatio * 554 + offsetX},${scalingRatio * 621 + offsetY},
            ${scalingRatio * 579 + offsetX},${scalingRatio * 626 + offsetY},
            ${scalingRatio * 587 + offsetX},${scalingRatio * 657 + offsetY},
            ${scalingRatio * 581 + offsetX},${scalingRatio * 705 + offsetY},
            ${scalingRatio * 554 + offsetX},${scalingRatio * 711 + offsetY},
            ${scalingRatio * 529 + offsetX},${scalingRatio * 707 + offsetY},
            ${scalingRatio * 521 + offsetX},${scalingRatio * 668 + offsetY},
            ${scalingRatio * 529 + offsetX},${scalingRatio * 626 + offsetY}`);
        redBarrel.setAttribute("points", `
            ${scalingRatio * 332 + offsetX},${scalingRatio * 784 + offsetY},
            ${scalingRatio * 370 + offsetX},${scalingRatio * 776 + offsetY},
            ${scalingRatio * 376 + offsetX},${scalingRatio * 716 + offsetY},
            ${scalingRatio * 368 + offsetX},${scalingRatio * 661 + offsetY},
            ${scalingRatio * 331 + offsetX},${scalingRatio * 660 + offsetY},
            ${scalingRatio * 293 + offsetX},${scalingRatio * 663 + offsetY},
            ${scalingRatio * 283 + offsetX},${scalingRatio * 716 + offsetY},
            ${scalingRatio * 292 + offsetX},${scalingRatio * 779 + offsetY}`);
        
    }
}

export function clicker() {
    const greenBarrel = document.getElementById("green");
    const yellowBarrel = document.getElementById("yellow");
    const blueBarrel = document.getElementById("blue");
    const redBarrel = document.getElementById("red");

    greenBarrel.addEventListener("click", () => {
        console.log("green!");
    });
    yellowBarrel.addEventListener("click", () => {
        console.log("yellow!");
    });
    blueBarrel.addEventListener("click", () => {
        console.log("blue!");
    });
    redBarrel.addEventListener("click", () => {
        console.log("red!");
    });
}

