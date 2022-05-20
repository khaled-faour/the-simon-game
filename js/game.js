// Sequence pattern variable
const pattern = [];

// Get all panel buttons
const panels = document.querySelectorAll('.btn')

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
    const lastElement = pattern[pattern.length - 1]
    const audio = new Audio(`../audio/${lastElement}.mp3`)
    audio.play()
    document.getElementById(lastElement).classList.add('pressed')
    setTimeout(()=>{
        document.getElementById(lastElement).classList.remove('pressed')
    }, 300)
}