import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_PLAY = 'videoplayer-current-time';

const saveTime = localStorage.getItem('TIME_PLAY');
const currentTime = JSON.parse(saveTime);

const finishTime = data => {
    localStorage.setItem('TIME_PLAY', JSON.stringify(data.seconds))
}

player.on('timeupdate', throttle(finishTime, 1000));

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = currentTime;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

    