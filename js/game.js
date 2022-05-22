// Sequence pattern variable
const pattern = [];

// Get all panel buttons and Add EventListeners
const panels = document.querySelectorAll('.btn')
panels.forEach(panel=>panel.addEventListener('click', ()=>checkButton(panel.attributes.id.value)))

// Colors array
const colors = ["green", "red", "yellow", "blue"]

// Pattern Counter
let counter = 0;

// Level Counter
let level = 0;

// HighScore (localStorage)
let highScore = localStorage.getItem('simon-highScore') || 0;

// Get Next Sequence When 
document.addEventListener('keydown', addSequence, {once: true});

// Function to add sequence
function addSequence(){
    changeLevel()
    const randomNumber = Math.floor(Math.random()*4)
    pattern.push(colors[randomNumber])
    playSound( pattern[pattern.length - 1])
    panels.forEach(panel=>panel.removeEventListener('click', checkButton))
    console.log(pattern)
}

// Function to play audio of panel
function playSound(element){
    console.log("ELEMENT: ", element)
    const audio = new Audio(`./audio/${element}.mp3`)
    audio.play()
    document.getElementById(element).classList.add('pressed')
    setTimeout(()=>{
        document.getElementById(element).classList.remove('pressed')
    }, 300)
}

// Check clicked button
function checkButton(value){

    if(value === pattern[counter]){
        playSound(value)
        if(counter >= pattern.length-1){
            setTimeout(()=>{
                addSequence()
                counter = 0;
            }, 1000)
        }else{
            counter++
        }
    }else{
        lose()
    }
}   


function changeLevel(){
    level++
    if(level > highScore){
        localStorage.setItem('simon-highScore', level)
        highScore = level
    }
    document.querySelector(".status").innerHTML = `Level: ${level} <br> High Score: ${highScore}`
}

function lose(){
    level = 0;
    pattern.splice(0,pattern.length)
    document.addEventListener('keydown', addSequence, {once: true});
    document.querySelector(".status").innerHTML = `Game Over, Press Any Key to Restart`
    panels.forEach(panel=>panel.removeEventListener('click', ()=>checkButton(panel.attributes.id.value)))
    document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
    const audio = new Audio(`./audio/wrong.mp3`)
    audio.play()
    setTimeout(()=>{
        document.getElementsByTagName('body')[0].style.backgroundColor = '#011F3F';
    }, 500)

}