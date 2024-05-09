const exerciseNames = ["Knee Push Ups", "Half Burpee", "Knee to Elbow Plank"];
const exerciseName = document.getElementById("exercise-name");

const exerciseImages = ["images/start-stopwatch.jpeg", "images/knee-push-ups.jpeg", "images/half-burpee.jpeg", "images/plank-knee-to-elbow.jpeg"];
let currentExerciseIndex = 0;
let exerciseTime = 0;
const exerciseImage = document.getElementById("exercise-image");

let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("timer")

function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer() {
    secondsElapsed++;
    setTime()
    setImage()
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 200)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
    currentExerciseIndex = 0;
    resetExerciseTime()
    setImage()
}

function setImage(){
    image.src = exerciseImages[currentExerciseIndex];
    if(secondsElapsed > exerciseTime){
        currentExerciseIndex++;
        setExerciseTime()
        image.src = exerciseImages[currentExerciseIndex];
    }
}

function setExerciseTime(){
    switch(currentExerciseIndex){
        case 1:
            exerciseTime += 30;
            setExerciseName()
            break;
        case 2:
            exerciseTime += 30;
            setExerciseName()
            break;
        case 3:
            exerciseTime += 60;
            setExerciseName()
            break;
    }
}

function resetExerciseTime(){
    exerciseTime = 0;
}

function setExerciseName(){
    exerciseName.innerHTML = exerciseNames[currentExerciseIndex-1];
}