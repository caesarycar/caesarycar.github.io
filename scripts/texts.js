
// Makes fancy text appear after clicking
export function showFancyText() {
    const textContainer = document.getElementById('text-container');

    // Create the text element
    const fancyText = document.createElement('div');
    fancyText.className = 'fancy-text';
    fancyText.textContent = '⋟♥༺ Yayyy ༻♥⋞';

    // Append the text element to the container
    textContainer.appendChild(fancyText);
    
    // Remove the text element from the DOM after a certain duration
    // setTimeout(() => {
    //     // textContainer.removeChild(fancyText);
    //     showKuromiImage();
    // }, 5000); // Adjust the duration as needed (in milliseconds)
}

// Changes visibility/animation of element
export function adjustAnimation(img_id, time, option, keepVisibility=false, trait="ease", direction="forwards") {
    
    const element = document.getElementById(img_id);
    const computedStyle = window.getComputedStyle(element);

    element.style.animation = `${option} ${time}s ${trait} ${direction}`;

    if (keepVisibility === false) {
        if (computedStyle.visibility === 'hidden') {
            element.style.visibility = `visible`
        }
        else {
        setTimeout(() => {
            element.style.visibility = `hidden`;
        }, time*1000);
        }
    }
}