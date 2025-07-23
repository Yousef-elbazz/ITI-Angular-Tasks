const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const volume = document.getElementById('volume');

let currentSpeed = 1.0;

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '&#10073;&#10073;'; // Pause icon
  } else {
    audio.pause();
    playBtn.innerHTML = '&#9654;'; // Play icon
  }
});

prevBtn.addEventListener('click', () => {
  currentSpeed = Math.max(0.5, currentSpeed - 0.25); // lower limit
  audio.playbackRate = currentSpeed;
  alert(`Speed: ${currentSpeed}x`);
});

nextBtn.addEventListener('click', () => {
  currentSpeed = Math.min(2.0, currentSpeed + 0.25); // upper limit
  audio.playbackRate = currentSpeed;
  alert(`Speed: ${currentSpeed}x`);
});

audio.addEventListener('loadedmetadata', () => {
  progress.max = audio.duration;
  duration.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  progress.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
});

progress.addEventListener('input', () => {
  audio.currentTime = progress.value;
});

volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
