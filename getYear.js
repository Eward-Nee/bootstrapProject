const date = new Date()
let totday = `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`

document.getElementById("date").innerHTML = totday;