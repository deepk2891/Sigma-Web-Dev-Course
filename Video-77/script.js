function createCard (title,cName,views,MonthsOld,duration,thumbnail) {


    if (views < 1000000)
    {
        viewStr = views / 1000 + "K"
    }
    else if (views > 1000000)
    {
        viewStr = views / 1000000 + "M"
    }
    else
    {
        viewStr = views / 1000 + "K"
    }

    let html = `
    <div class="card">
        <div class="image">
            <img src=${ thumbnail } alt="" />
            <div class="capsule">${ duration }</div>
        </div>
        <div class="text">
            <h1>${ title }</h1>
            <p>${ cName } . ${ viewStr } views . ${ MonthsOld } months ago</p>
        </div>
    </div>
    `

    document.querySelector(".container").innerHTML += html
}

//  <div class="card">
//      <div class="image">
//          <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw" alt="" />
//          <div class="capsule">31:06</div>
//      </div>
//      <div class="text">
//          <h1>Introduction to Backend | Sigma Web Dev video #2</h1>
//          <p>CodeWithHarry . 727K views . 2 months ago</p>
//      </div>
//  </div>

createCard("Introduction to Backend | Sigma Web Dev video #2","CodeWithHarry",56000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #3","CodeWithHarry",1250000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")