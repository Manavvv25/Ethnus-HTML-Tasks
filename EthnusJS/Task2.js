function sortString() {
    let input = document.getElementById("textInput").value;
    let sortedString = input.split('').sort().join('');
    document.getElementById("output").innerText = sortedString;
}
