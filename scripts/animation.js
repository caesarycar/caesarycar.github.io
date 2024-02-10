
/*
// Pause animation when the window loses focus
window.addEventListener("blur", function() {
    setTimeout(() => {
        animationPaused = true;
        pauseAnimation();
    }, 100);
});

// Resume animation when the window regains focus
window.addEventListener("focus", function() {
    setTimeout(() => {
        animationPaused = false;
        resumeAnimation();
    }, 100);
});
*/

// Function to pause the animation
export function pauseAnimation() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.animationPlayState = 'paused';
    });
}

// Function to resume the animation
export function resumeAnimation() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.animationPlayState = 'running';
    });
}
