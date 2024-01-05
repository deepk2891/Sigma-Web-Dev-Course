let button = document.getElementById('btn')

button.addEventListener('click',() => {

    document.querySelector('.box').innerHTML = "<b>you were clicked</b> Enjoy you click"
    alert('clicked')
})

button.addEventListener('contextmenu',() => {
    alert("Dont hack us by right click")
})

button.addEventListener('keydown',(e) => {
    console.log(e.key)
})