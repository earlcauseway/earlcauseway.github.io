const video = document.querySelector('.heroVideo');

video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
});

if (video.readyState >= 1) video.currentTime = 0;

video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
});

//fix the back button freezing video
window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        video.currentTime = 0;
        video.play();
    }
});