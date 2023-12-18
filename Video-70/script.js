let box = document.querySelectorAll('.box')

function changeColors () {
    document.documentElement.style.setProperty("--random-bg-color",getRandomColor())
    document.documentElement.style.setProperty("--random-color",getRandomColor())
}

function getRandomColor () {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++)
    {
        color += letters[ Math.floor(Math.random() * 16) ]
    }
    return color
}