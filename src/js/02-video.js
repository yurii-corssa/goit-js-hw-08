import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const saveCurrentTimeToLocal = ({ seconds }) =>
  localStorage.setItem('videoplayer-current-time', seconds);

player.on('timeupdate', throttle(saveCurrentTimeToLocal, 1000));

const currentTimeInLocal = localStorage.getItem('videoplayer-current-time');

if (currentTimeInLocal) {
  player.setCurrentTime(currentTimeInLocal);
}
