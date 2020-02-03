/*
    JavaScript1 - Module Assignment 2
*/


// Question 1 - Creating an anonymous function that console logs my name


function myFunctionExpression(someFunction) {
    someFunction();
}

myFunctionExpression(function() {
    console.log("Filip");
});



// Question 2 - Selecting input in HTML file by it's class, creating a click event listener.

const button = document.querySelector (".btn");

function loggingButtonClick() {
    console.log("I was Clicked");
}

button.addEventListener ("click", loggingButtonClick);


// Question 3 - Selecting the input Html by it's ID

const input = document.getElementById("#firstName");

document.addEventListener ("keydown", function (gettingId){
    console.log("event", gettingId);
    
});

// Question 4 - Selecting button in HTML by it's Tag nd adding a hover function to it

let hoveringButton = document.querySelector ("button");

function callOnHover() {
    console.log(" ");
    hoveringButton.classList.add("hover");
}

hoveringButton.addEventListener("mouseover", callOnHover);

// Quetsion 5 - Selecting button in HTML by it's data attribute, adding a mouseout and removing the hover.

let buttonHover = document.querySelector("[data-animal='dog']");

buttonHover.addEventListener("mouseout", function() {
    buttonHover.classList.remove("hover");
});

// Question 6 - Selecting all the Li elements from the HTMl file using a loop

const listItems = document.querySelectorAll("li");

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("mouseover", function(event){
        console.log(event.target.dataset);
    })

}

// Question 7 -  convert the if else statement below to a switch statement

/*
const animal = "cow";

if(animal === "cat") {
    console.log("Meow");
}
else if(animal === "cow") {
    console.log("Moo");
}
else if(animal === "bird") {
    console.log("Tweet");
}
else {
    console.log("Harrumph");
}
*/

const animal = "cow";

switch(animal){
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

// Question 8 - converting a for loop to a forEach loop.

const sheep = ["Malcolm", "Anders", "Marie"];

//for(let i = 0; i < sheep.length; i++) {
//    console.log(sheep[i]);
//}

sheep.forEach(function(sheep) {
    console.log(sheep);
});


// Question 9 - Creating a timer that logs out hello every half second and must stop after 6 times.

function helloInterval() {
    console.log("Hello");
    if(counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}

let counter = 0;

const intervalId = setInterval(helloInterval, 500);



// Question 10 Updating div text to say Text updated after 2 seconds, I will use innerHTML.

const updatingContainer = document.querySelector(".container");

function updateDiv(){
    updatingContainer.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);