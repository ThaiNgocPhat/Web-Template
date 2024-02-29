
var audio = document.getElementById('audio-player');
var songTitle = document.getElementById('song-title');

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function volumeUp() {
    if (audio.volume < 1.0) {
        audio.volume += 0.1;
    }
}

function volumeDown() {
    if (audio.volume > 0.0) {
        audio.volume -= 0.1;
    }
}

// Thêm sự kiện để cập nhật tiêu đề bài hát
audio.addEventListener('loadedmetadata', function() {
    songTitle.textContent = audio.currentSrc.split('/').pop(); // Lấy tên file âm thanh
});