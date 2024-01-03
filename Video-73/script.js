// script.js
function createCard (title,cName,views,monthsOld,duration,thumbnail) {
    var card = document.createElement("div");
    card.classList.add("card");

    var cardContent = `
        <img src="${ thumbnail }" alt="${ title }" />
        <h2>${ title }</h2>
        <p>Channel: ${ cName }</p>
        <p>Views: ${ views.toLocaleString() }</p>
        <p>${ monthsOld } months old</p>
        <p>Duration: ${ duration }</p>
    `;

    card.innerHTML = cardContent;

    var container = document.querySelector(".container");
    container.appendChild(card);
}

createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
