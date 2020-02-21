var time = setInterval(countdownTimer, 1000);

function countdownTimer() {
    var current = new Date();
    var finish = new Date('November 10, 2020 12:00:00');
    var remaining = finish.getTime() - current.getTime();

    var d = Math.floor(remaining / (1000 * 60 * 60 * 24));
    var h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((remaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = d + ' days ' + h + ' hours ' + m + ' mins ' + s + ' secs ';

    if (remaining <= 0) {
        clearInterval(time);
        document.getElementById('countdown').innerHTML = 'Happy Birthday!';
        document.getElementById('text').innerHTML = '';
    }
}
countdownTimer();