console.log('Harry is hacker')
console.log('Rohan is hacker')

setTimeout(() => {
    console.log("I am inside settimeout")
},0);

console.log("The end")


const fn = () => {
    console.log('Nothing')
}
const callback = (arg) => {
    console.log(arg)
    fn()
}

const loadScript = (src,callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Deep",fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(arg,fn) => {
    console.log(arg)
    fn("firstarg",() => {
        WebTransportDatagramDuplexStream("secondarg",() => {
            //CALLBACK HELL
        })
    })
})

