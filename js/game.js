// Sequence pattern variable
const pattern = [];

// Get Next Sequence When 
document.addEventListener('keydown', addSequence, {once: true});

// Function to add sequence
function addSequence(){
    const randomNumber = Math.floor(Math.random()*4)
    pattern.push(randomNumber)
    console.log(pattern)
}