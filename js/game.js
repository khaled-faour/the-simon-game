// Sequence pattern variable
const pattern = [];

// Colors array
const colors = ["green", "red", "yellow", "blue"]

// Get Next Sequence When 
document.addEventListener('keydown', addSequence, {once: true});

// Function to add sequence
function addSequence(){
    const randomNumber = Math.floor(Math.random()*4)
    pattern.push(colors[randomNumber])
    playSound()
}

// Function to play audio of panel
function playSound(){
    const audio = new Audio(`../audio/${pattern[pattern.length - 1]}.mp3`)
    audio.play()
}