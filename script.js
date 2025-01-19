const video = document.getElementById('myVideo');

// Intersection Observer to detect when the video is in the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (video.paused) {
        video.play(); // Play the video when it enters the viewport
      }
    } else {
      if (!video.paused) {
        video.pause(); // Pause the video when it leaves the viewport
      }
    }
  });
}, { threshold: 0.5 }); // Play when 50% of the video is in view

// Start observing the video element
observer.observe(video);

const video2 = document.getElementById('myVideo');

// Set the volume to 0.2 (20% of the maximum volume)
video2.volume = 0.2;

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("[data-animation]").forEach((el) => observer.observe(el));
});

