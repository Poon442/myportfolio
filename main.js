document.addEventListener("DOMContentLoaded", function () {
  const videos = [
    { src: 'video1.mp4', title: 'Video 1' },
    { src: 'video2.mp4', title: 'Video 2' },
    { src: 'video3.mp4', title: 'Video 3' },
    { src: 'video4.mp4', title: 'Video 4' }
  ];

  let currentVideoIndex = 0;
  const videoPlayer = document.getElementById('video-player');
  const videoTitle = document.getElementById('video-title');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  function updateVideo() {
    videoPlayer.src = videos[currentVideoIndex].src;
    videoTitle.textContent = videos[currentVideoIndex].title;
    videoPlayer.load(); // Reload the video
  }

  leftArrow.addEventListener('click', function () {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
  });

  rightArrow.addEventListener('click', function () {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
  });

  // Initialize with the first video
  updateVideo();
});
document.querySelector('.video-btn button').addEventListener('click', function () {
  // Example: Open the video in a new page or fullscreen
  window.open('path_to_video/video1.mp4', '_blank');
  // OR for fullscreen:
  const videoElement = document.getElementById('video-player');
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) { // Firefox
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) { // IE/Edge
    videoElement.msRequestFullscreen();
  }
});
