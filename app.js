
import { pauseAnimation, resumeAnimation } from './scripts/animation.js';
import { runAway, dissapearButtons } from './scripts/buttons.js';
import { showFallingHearts, showFadingHearts } from './scripts/hearts.js';
import { showFancyText, adjustAnimation } from './scripts/texts.js';

// ------------------------------

// Exporting value to hearts.js
export let animationPaused = false;

// Pause animation when the tab loses focus
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        animationPaused = true;
        pauseAnimation();
    } else {
        animationPaused = false;
        resumeAnimation();
    }
});

// ------------------------------

// Wrap the function call inside a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    showFadingHearts();
});

// Make Thinking Kuromi float after it slides in the screen
setTimeout(() => {
    adjustAnimation("thinking", 4, "HoveringThinking", true, "ease-in-out", "infinite")
}, 3000);

// Make Window Kuromi float after appearing, after delay
setTimeout(() => {
    adjustAnimation("window-kuromi", 4, "slideDown");
    setTimeout(() => {
        adjustAnimation("window-kuromi", 4, "HoveringWindow", true, "ease-in-out", "infinite")
    }, 4000);
}, 3000);

// ------------------------------

window.onload = function() {
    var music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    }
};

// ------------------------------

// Main function
function sheSaidYes() {

    // Play the audio
    var music = document.getElementById("bg");
    music.play();
    
    // Dissapear buttons after clicking "Yes" (no other option :3)
    dissapearButtons();
    
    // Bottom kuromi container
    adjustAnimation("kuromi-pls", 1, "slideOutToLeft");   
    adjustAnimation("kuromi-omg", 1, "slideInFromLeft");
    adjustAnimation("happy-kuromi-right", 2, "slideInFromRight");
    adjustAnimation("kuromi-thanks", 2, "slideUp")
    adjustAnimation("kuromi-not-care", 1, "slideInFromLeft");

    // --------------------------------
    
    // Top kuromi container
    adjustAnimation("cupid1", 30, "cupidAnimation1", "ease", "infinite");
    adjustAnimation("cupid2", 30, "cupidAnimation2", "ease", "infinite");
    adjustAnimation("happy-kuromi-left", 3, "slideInFromLeft");
    
    adjustAnimation("kuromi-hope", 6, "slideDown")
    setTimeout(() => {
        adjustAnimation("kuromi-hope", 2, "rotateImageStart", true);
        setTimeout(() => {
            adjustAnimation("kuromi-hope", 7, "rotateSlightly", true, "ease", "infinite");
        }, 2000);
    }, 6000);
    
    // --------------------------------

    // Middle elements
    adjustAnimation("will-you-be", 3, "fadeOut");
    adjustAnimation("thank-you", 6, "slideUp");
    adjustAnimation("kuromi-happy", 5, "slideUp");
    
    // Show the "Yayyyyy :3" text
    showFancyText();
    
    // --------------------------------

    // Make hearts flow all the time 
    setInterval(showFallingHearts, 1700);
}

// Add an event listener to the "Yes" button
document.getElementById('yes').addEventListener('click', sheSaidYes);

// Add an event listener to the "No" button
document.getElementById('no').addEventListener('mouseover', runAway);
