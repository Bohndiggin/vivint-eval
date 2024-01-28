let bannerOuter = document.getElementById('banner-outer')
let banner = document.getElementsByClassName('banner-clickable')
let closebanner = document.getElementById('close-banner')
let popUp = document.getElementById('popup-outer')
let popX = document.getElementById('x-box')

function bringUp(ev) {
    // Function brings up the popup
    popUp.style.display = "flex"
}

// this makes an array from the elements captured by banner. This is so when you click on the X you don't open the popup you didn't want.
Array.from(banner).forEach(element => {
    // add event listener to the elements selected
    element.addEventListener('click', ev => {
        // run our command to bring up the popup
        bringUp()
    })
})

closebanner.addEventListener('click', ev => {
    bannerOuter.style.display = "none"
});

popX.addEventListener('click', ev => {
    popUp.style.display = "none"
});

let countDownTimerTarget = new Date("Feb 1, 2024 00:00:00").getTime();

let countDownTimer = setInterval(() => {
    let currentTime = new Date().getTime();
    let duration = countDownTimerTarget - currentTime;

    let days = Math.floor(duration / (1000 * 60 * 60 * 24))
    let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((duration % (1000 * 60)) / 1000)

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    if (duration < 0) {
        clearInterval(countDownTimer);
        document.getElementById('timer').innerHTML = "TOO LATE";
    }
}, 1000);