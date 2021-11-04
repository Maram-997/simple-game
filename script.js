// access the character by using get element by id
let character = document.getElementById("character");
// access the block by using get element by id
let block = document.getElementById("block");
// socre counter
let counter=0;
function jump(){
    // add the classlist animate as long as it's been added
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        // remove the classlist animate to be able to add it again onClick 300 the time of the animation takes 
        character.classList.remove("animate");
    },300);
}
// this function will check if you lost or not
let checkDead = setInterval(function() {
    // git the position for the character and the block by using getComputedStyle and getPropertyValue and convert it into number instead of number with 'px'
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    // the animation will stop if the block is between the 0-20px from the left it's in the character field and if character top is greater than or equal to 130 , it jumped less than 20 px, so it hasn't jumped over the entire block.
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        // disable the animation 
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        // divide on 100 because this counter will count the time with milisec
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);