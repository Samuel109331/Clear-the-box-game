var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Cyan', 'Orange', 'Indigo',
'Lime', 'Navy', 'Maroon', 'Teal', 'Pink', 'Brown', 'Coral', 'Olive',
'Tomato', 'SaddleBrown', 'HotPink', 'black'];
var homePage = document.querySelector("#intro")
var mainPage = document.querySelector("#game")
colors.forEach(el => {
    el.toLowerCase();
})
window.onload = function(){
var tableCells = document.querySelectorAll("td");
tableCells.forEach(element => {
    element.style.backgroundColor = `${colors[Math.ceil(Math.random()*colors.length-1)]}`
    element.addEventListener("click",playGame)
    colors.push(element.style.backgroundColor)
});
}

//check if there are any left
const check = (i) => {
var checkColor = false;
var arr = [];
document.querySelectorAll("td").forEach(el => {
if (el.style.backgroundColor == i){
    arr.push(i);
}

});
if (arr.length == 0) {
    checkColor = false;
    arr = [];
}
else {
    checkColor = true;
}
return checkColor;
}
//end


var count = 0;
var target = "";
var collected = [];
var parent = document.querySelector("table");


//function to open the game container
const openGame = () => {
    mainPage.style.display = "block";
    homePage.style.display = "none";
}


//function to show help
const help = () => {
    swal({  
        title: "Game instructions",  
        text: `To play the game first click on a random box
             Then clear all the balls with the same color
             after clearing all do the same thing for other colors also!`,  
        icon: "success",  
        button: "Got it!",  
      });  
}

//function to show about
const about = () => {
    swal({  
        title: "About the game",  
        text: `Game developer : Samuel Getachew
                Email:samif.jain36@gmail.com`,  
        icon: "success",  
        button: "Got it!",  
      });  
}

//esc event to go back to home page
window.addEventListener("keydown",(e) => {
    // alert(e.key)
if (e.key == "Escape") {
    if (homePage.style.display == "none") {
    if (confirm("Are you sure you wanna go back to the home page?")) {
            homePage.style.display = "block";
            mainPage.style.display = "none";
}
}
}
})

//play game function
function playGame() {
count++;
if (count == 1){
target = this.style.backgroundColor;
swal(`task`,`Now find other ${target} colored boxes!`,`success`)
}
else {
    if (this.style.backgroundColor != target){
        swal(`Warning!`,`This is ${this.style.backgroundColor} colored box you are supposed to find ${target} colored box!`,`error`);
    }
    else {
        collected.push(this.style.backgroundColor);
        document.querySelector("p").innerHTML =`You collected ${collected.length} ${target} colored boxes`;
        this.parentNode.removeChild(this);
    }
}
if (check(target) == false){
count = 0;
collected=[]
}

}