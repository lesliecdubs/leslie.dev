const pauseVideo = function (vid) {
  return function () {
    vid.pause();
  }
}

const playVideo = function (vid) {
  return function () {
    vid.play();
  }
}

function handleHover() {
  const video = document.querySelectorAll('video');

  video.forEach(function (vid) {
    vid.addEventListener('mouseover', playVideo(vid));
    vid.addEventListener('mouseout', pauseVideo(vid));
  });
}

handleHover();