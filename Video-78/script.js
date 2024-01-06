//  const messages = [ "Initializing Hacking...","Reading your Files...","Password files Detected...","Sending all passwords and personal files to server...","Cleaning up..." ]
//  function simulateHacking () {
//      const outputElement = document.getElementById("output")
//      function printMessage (index) {
//          setTimeout(() => {
//              outputElement.innerHTML = messages[ index ]
//              if (index < messages.length - 1)
//              {
//                  printMessage(index + 1)
//              } else
//              {
//                  outputElement.innerHTML = "Hacking complete!"
//              }
//          },Math.floor(Math.random() * 7000) + 1000)
//      }
//      printMessage(0)
//  }
//  simulateHacking()


async function simulateHacking () {
    await showMessage("Initializing Hacking...")
    await showMessage("Reading your Files...")
    await showMessage("Password files Detected...")
    await showMessage("Sending all passwords and personal files  to server...")
    await showMessage("Cleaning up...")
    await showMessage("Hacking Completed...")
}
async function showMessage (message) {
    const delay = getRandomDelay(1,7) * 1000
    await sleep(delay)
    displayMessage(message)
}
function displayMessage (message) {
    const terminal = document.body
    const messageElement = document.createElement("div")
    messageElement.textContent = message
    messageElement.classList.add("blink")
    terminal.appendChild(messageElement)
}
function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}
function getRandomDelay (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
simulateHacking()