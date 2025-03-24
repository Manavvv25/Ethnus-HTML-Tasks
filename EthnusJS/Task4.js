function showDate() {
    let now = new Date();
    let formattedDate = now.getDate() + "/" + now.toLocaleString('default', { month: 'long' }) + "/" + now.getFullYear();
    document.getElementById("date").innerText = formattedDate;
}

function showTime() {
    let now = new Date();
    document.getElementById("time").innerText = now.toString();
}
