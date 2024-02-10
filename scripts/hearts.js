
import { animationPaused } from '../app.js';

// Makes hearts fall from the top of the screen
export function showFallingHearts() {
    if (animationPaused) return; // Exit function if animation is paused

    const heartsContainer = document.getElementById('hearts-container');
    const numberOfHearts = 10;
    
    for (let i = 0; i < numberOfHearts; i++) {
        // Generate a heart element
        const heart = document.createElement('div');
        heart.className = 'heart';

        // Append the heart element to the container
        heartsContainer.appendChild(heart);

        // Set a random position for the heart
        const initialX = Math.random() * window.innerWidth;
        const initialY = -50; // Start from above the screen

        heart.style.left = initialX + 'px';
        heart.style.top = initialY + 'px';

        // Set a random rotation
        const rotation = Math.random() * 100 - 50; // Between -50 and 50 degrees
        heart.style.setProperty('--rotation', rotation);

        // Set a random animation duration
        const duration = Math.random() * 10 + 2; // Between 2 and 4 seconds

        // Set animation styles and rotation
        heart.style.transform = `rotate(${rotation}deg)`;
        heart.style.animation = `fall ${duration}s ease-in forwards`;
    
        // Remove the heart element from the DOM after the animation ends
        heart.addEventListener('animationend', () => {
            heartsContainer.removeChild(heart);
        });
    }
}

// Generates and animates hearts fading in and out on the whole screen
export function showFadingHearts() {
    const numberOfHearts = 151;
    const heartsContainer = document.getElementById('hearts-container');

    // Fix positions when we resise the screen
    const updateHeartPositions = () => {
        // Iterate through all fading hearts and update their positions
        const fadingHearts = heartsContainer.querySelectorAll('.fading-heart');
        fadingHearts.forEach(heart => {
            const initialX = Math.random() * window.innerWidth;
            const initialY = Math.random() * window.innerHeight;
            heart.style.left = initialX + 'px';
            heart.style.top = initialY + 'px';
        });
    };

    // Generate and append heart elements to the container
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'fading-heart';
        heartsContainer.appendChild(heart);

        // Set random position for each heart
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        heart.style.left = initialX + 'px';
        heart.style.top = initialY + 'px';

        // Set random animation delay and duration for each heart
        // const delay = Math.random() * 5; 
        const duration = Math.random() * 10 + 2; 
        const rotation = Math.random()  * 50 - 20;

        heart.style.animation = `fadeHeart ${duration}s ease-in-out infinite alternate`;
        heart.style.transform = `rotate(${rotation}deg)`;
    }

    // Update heart positions whenever the window is resized or scrolled
    window.addEventListener('resize', updateHeartPositions);
    window.addEventListener('scroll', updateHeartPositions);
}
