import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player.Player(iframe);

// player.on('timeupdate', function (data) {
//   const currentTime = data.seconds;
//   localStorage.setItem('videoplayer-current-time', currentTime);
//   console.log('played the video!');
// });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}
