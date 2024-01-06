function displayChar() {
    var char = document.getElementById("inputChar").value;
    if (char.length === 1) {
        document.getElementById("displayArea").innerText = char;
    } else {
        alert("请输入一个字！");
    }
}

