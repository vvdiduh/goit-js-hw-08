import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_PLAY = 'videoplayer-current-time';

const finishTime = data => {
    // localStorage.setItem(TIME_PLAY, JSON.stringify(data))
}

player.on('timeupdate', finishTime);

    