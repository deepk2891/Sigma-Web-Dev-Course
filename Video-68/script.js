// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[ 2 ].style.backgroundColor = "red"


// document.getElementById("redBox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})

redBox = document.getElementById('redBox');
if (redBox.matches('.box'))
{
    console.log('The redBox matches the .box selector.');
}

redBox = document.getElementById('redBox');
container = redBox.closest('.container');

console.log(document.querySelector("body").contains(document.querySelector(".container")))