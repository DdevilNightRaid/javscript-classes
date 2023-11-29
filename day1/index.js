

// function 
function updateClock() {
    const time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if(hours < 10){
        document.getElementById('hour').innerHTML = "0" + hours;
    } else{
        document.getElementById('hour').innerHTML = hours;
    }

    if(minutes < 10){
        document.getElementById('minute').innerHTML = "0" + minutes;
    } else{
        document.getElementById('minute').innerHTML = minutes;
    }

    if(seconds < 10){
        document.getElementById('second').innerHTML = "0" + seconds;
    } else {
        document.getElementById('second').innerHTML = seconds;
    }
}

// setInterval(code, timeValue) it takes time in miliseconds
// 1000miliseconds = 1second

setInterval(updateClock, 1000);

// console.log(hours)
// console.log(minutes)
// console.log(seconds)
// let dog = document.getElementById('hour').innerHTML = hours;
// console.log(dog)

