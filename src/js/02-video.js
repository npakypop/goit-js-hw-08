
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const throttle = require("lodash.throttle");

const TIME_KEY = "videoplayer-current-time";


player.on('timeupdate', throttle(pushToLocalStorage, 1000));

function pushToLocalStorage(event) {  
    localStorage.setItem(TIME_KEY, event.seconds); 
}

player.setCurrentTime(localStorage.getItem(TIME_KEY))

