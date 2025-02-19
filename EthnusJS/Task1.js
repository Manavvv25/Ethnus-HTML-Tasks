function reverseNumber() {
    let num = document.getElementById("numberInput").value;
    let reversedNum = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    document.getElementById("result").innerText = "Reversed Number: " + reversedNum;
}
