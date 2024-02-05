document.addEventListener('DOMContentLoaded', (event) => {
    var audioLoaded = false;
    var audio = document.getElementById('myAudio');
    audio.addEventListener('loadedmetadata', function () {
        audioLoaded = true; // 确保音频已加载，可以获取到时长
    });

    document.addEventListener('click', function () {
        if (!audioLoaded) {
            console.log('音频还未加载完毕');
            return; // 如果音频还没加载完，不进行操作
        }

        // 随机选择开始时间
        var startTime = Math.random() * (audio.duration - 5); // 确保我们有足够的时间播放
        audio.currentTime = startTime;
        audio.play();

        // 可选：设置定时器在一段时间后停止播放
        setTimeout(function () {
            audio.pause();
            // 如果需要，可以在这里将 currentTime 设置为0或其他操作
        }, 50000); // 这里以5秒为例
    });
});

