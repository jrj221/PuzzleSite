import styles from "./puzzle2.module.css"

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

let input = [];
export function setUpClickListeners() {
     // Add event listeners to each barrel to mark which was clicked
     const greenBarrel = document.getElementById("green");
     const yellowBarrel = document.getElementById("yellow");
     const blueBarrel = document.getElementById("blue");
     const redBarrel = document.getElementById("red");
 
    greenBarrel.addEventListener("click", () => {
         console.log("green");
         input.push("green");
     });
     yellowBarrel.addEventListener("click", () => {
        console.log("yellow");
        input.push("yellow");
     });
     blueBarrel.addEventListener("click", () => {
        console.log("blue");
        input.push("blue");
     });
     redBarrel.addEventListener("click", () => {
        console.log("red");
        input.push("red");
     });
}

export async function parrot() {
    // Definitions of each colored circle SVG
    const spacer = `<div style="margin-bottom: 15px"><svg width="20" height="20"></svg></div>`;
    const red = `<div style="margin-bottom: 15px"><svg width="20" height="20"><circle cx="10" cy="10" r="10" fill="red" /></svg></div>`
    const yellow = `<div style="margin-bottom: 15px"><svg width="20" height="20"><circle cx="10" cy="10" r="10" fill="gold" /></svg></div>`
    const blue = `<div style="margin-bottom: 15px"><svg width="20" height="20"><circle cx="10" cy="10" r="10" fill="blue" /></svg></div>`
    const green = `<div style="margin-bottom: 15px"><svg width="20" height="20"><circle cx="10" cy="10" r="10" fill="green" /></svg></div>`
    
    // Arrays that hold data for each round. Each entry is a SVG and a string to compare against to see if they clicked the right one
    const round1 = [
        spacer,
        red,
        spacer
    ];
      
    const round2 = [
    spacer,
    red,
    spacer,
    blue,
    spacer,
    red,
    spacer
    ];
    
    const round3 = [
    spacer,
    red,
    spacer,
    blue,
    spacer,
    red,
    spacer,
    yellow,
    spacer,
    red,
    spacer
    ];
    
    const round4 = [
    spacer,
    red,
    spacer,
    blue,
    spacer,
    red,
    spacer,
    yellow,
    spacer,
    red,
    spacer,
    green,
    spacer,
    blue,
    spacer,
    yellow,
    spacer
    ];
    
    const round5 = [
    spacer,
    red,
    spacer,
    blue,
    spacer,
    red,
    spacer,
    yellow,
    spacer,
    red,
    spacer,
    green,
    spacer,
    blue,
    spacer,
    yellow,
    spacer,
    red,
    spacer,
    green,
    spacer
    ];
    
    // Create the bubble element that holds the color SVGs
    const text = document.createElement("div");
    text.classList.add("parrotMsg")
    text.style.width = "200px";
    text.style.height = "100px";
    text.style.display = "flex";
    text.style.justifyContent = "center";
    text.style.alignItems = "center";
    text.style.fontSize = "20px";
    text.style.position = "absolute";
    text.style.backgroundImage = "url('./textBubble.png')";
    text.style.backgroundSize = "contain";
    text.style.top = "320px";
    text.style.left = "600px";
    text.innerHTML = yellow;
    
    const page = document.getElementById("pageWrapper");
    page.appendChild(text);

    // Simon says logic, should loop over round and only progress if they get it right
    let gameDone = false;
    let roundNum = 1;
    let round = [];

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function doRound() {
            for (let i = 0; i < round.length; i++) {
                const colorRender = round[i]; 
                text.innerHTML = colorRender;
                await wait(1000);
            }
    }

    async function playerInput() {
        console.log("waiting...");
        input = [];
        while (input.length < roundColors.length) {
            await wait(100); // resolves queued up events, which a while loop blocks
        }
        console.log(`Expected: ${roundColors}`);
        console.log(`Got: ${input}`);
        if (input.every((val, i) => val === roundColors[i])) { // array comparison. .every() does a test for each value, we use an arrow funciton to compare the values at each index
            console.log("you got it!");
            return true;
        }
        else {
            console.log("try again");
            return false;
        }
    }
    let roundColors = [];
    while (!gameDone) {
        // Initialize variables based on which round you're on
        switch (roundNum) {
            case 1:
                roundColors = ["red"];
                round = round1;
                break;
            case 2:
                roundColors = ["red", "blue", "red"];
                round = round2;
                break;
            case 3:
                roundColors = ["red", "blue", "red", "yellow", "red"];
                round = round3;
                break;
            case 4:
                roundColors = ["red", "blue", "red", "yellow", "red", "green", "blue", "yellow"];
                round = round4;
                break;
            case 5:
                roundColors = ["red", "blue", "red", "yellow", "red", "green", "blue", "yellow", "red", "green"];
                round = round5;
                break;
        }
        let roundDone = false;
        while (!roundDone) {
            await doRound();
            roundDone = await playerInput();
        }
        console.log(`Round ${roundNum} complete!`);
        roundNum++;
        if (roundNum == 6) { // finished round 5, game over!
            break;
        }
    }
}