function reverseString() {
    var originalString = document.getElementById("reverse").value;
    var reversedString = [];
    for (var i = originalString.length - 1; i >= 0; i--) {
        reversedString += originalString[i];
    }
    console.log(reversedString);
}