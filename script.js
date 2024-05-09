const exerciseNames = ["Current Workout", "Push Ups", "Arch Up", "Burpees", "Bridge Race", "Knee to Elbow Plank", "Lunges", "Site to Site Plank"];
const exerciseName = document.getElementById("exercise-name");

const exerciseImages = ["images/start-stopwatch.jpeg", "images/push-ups.png", "images/arch-up.png", "images/burpees.png", "images/bridge-race.png", "images/knee-to-elbow-plank.png", "images/lunges.png", "images/site-to-site-plank.png"];
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
    interval = setInterval(timer, 1000)
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
    setExerciseName()
}

function setImage(){
    exerciseImage.src = exerciseImages[currentExerciseIndex];
    if(secondsElapsed > exerciseTime){
        currentExerciseIndex++;
        if(currentExerciseIndex == 8){
            return finishExercise()
        }
        setExerciseTime()
        exerciseImage.src = exerciseImages[currentExerciseIndex];
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
        case 4:
            exerciseTime += 30;
            setExerciseName()
            break;
        case 5:
            exerciseTime += 30;
            setExerciseName()
            break;
        case 6:
            exerciseTime += 60;
            setExerciseName()
            break;
        case 7:
            exerciseTime += 60;
            setExerciseName()
            break;
    }
}

function resetExerciseTime(){
    exerciseTime = 0;
}

function setExerciseName(){
    exerciseName.innerHTML = exerciseNames[currentExerciseIndex];
}

function finishExercise(){
    resetClock()
}