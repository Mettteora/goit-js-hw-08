// const Player = require(`@vimeo/player`);

// // import Player from '@vimeo/player';
import Player from '@vimeo/player';

import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player.Player(iframe);

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
