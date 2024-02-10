
// Current coordinates of NO button
let currentX = 0;
let currentY = 0;

// Makes the button run away on mouse hover
export function runAway() {
    const noElement = document.getElementById("no");

    // Check if the user is on a mobile device
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        // Attach runAway function to click event for mobile devices
        noElement.addEventListener('click', runAway);
    }

    // Randomize destination coordinates
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

    const destX = plusOrMinus * Math.random() * (0.3 * window.innerWidth);
    const destY = plusOrMinus * Math.random() * (0.3 * window.innerHeight);

    // Set custom properties for use in the CSS animation
    noElement.style.setProperty('--dest-x', destX + 'px');
    noElement.style.setProperty('--dest-y', destY + 'px');

    // Update current position
    currentX = destX;
    currentY = destY;

    // Trigger the animation
    noElement.classList.remove("run-away");
    void noElement.offsetWidth; // Trigger reflow
    noElement.classList.add("run-away");
}

// Makes the buttons dissapear onClick
export function dissapearButtons() {
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');

    yes.style.animation = 'fadeOut 1.5s ease forwards';
    no.style.animation = yes.style.animation;
    
    setTimeout(() => {
        yes.style.visibility = 'hidden';
        no.style.visibility = yes.style.visibility;    
    }, 1500);
}
