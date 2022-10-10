const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwLeft = document.getElementById("pw-left")
let pwRight = document.getElementById("pw-right")
let PW1 = []
let PW2 = []
let pwLength = 15


//random indexes are selected
function randomItem(){
    let randomNumber = Math.floor(Math.random()*characters.length)
    return characters[randomNumber]
}




//Generate a password-array with 15 characters
function generateNewPWs(){
    PW1 = []
    PW2 = []
    for (i=0; i<pwLength; i++)
    {
            randomItem()
            PW1.push(randomItem())
            randomItem()
            PW2.push(randomItem())
    } 
}




function writePWLeft(){
    PW1String = ""
    for (j=0; j<PW1.length; j++){
    PW1String += PW1[j]}
    return PW1String
    
}

function writePWRight(){
    PW2String = ""
    for (j=0; j<PW2.length; j++){
    PW2String += PW2[j]}
    return PW2String
}


function generatePWs(){
    generateNewPWs()
    pwLeft.textContent = writePWLeft()
    pwRight.textContent =   writePWRight()
}


//Extra feature: PW length
let lengthEl = document.getElementById("length-el")

function increment(){
    pwLength ++
    let newLength = pwLength
    lengthEl.textContent = newLength + " characters"
    
}
function decrement(){
    pwLength --
    let newLength = pwLength
    lengthEl.textContent = newLength + " characters"
}
