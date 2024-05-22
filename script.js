const DATETIMEPLACEHOLDER = document.getElementById("datetime");
let DATE, TIME;

function refreshTime() {
    let dateString = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Manila",
    });
    const formattedString = dateString.replace(", ", "-").split("-");
    DATE = formattedString[0];
    TIME = formattedString[1];
    // timeDisplay.innerHTML = formattedString;

    console.log(formattedString);

    const date = document.createElement("p");
    const time = document.createElement("p");
    date.id = "datestr";
    date.classList.add("datetimestr");
    date.innerText = DATE;

    time.id = "timestr";
    time.classList.add("datetimestr");
    time.innerText = TIME;

    DATETIMEPLACEHOLDER.innerHTML = "";

    DATETIMEPLACEHOLDER.appendChild(date);
    DATETIMEPLACEHOLDER.appendChild(time);
}

setInterval(refreshTime, 1000);
