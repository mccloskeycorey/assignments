document.getElementById("hello").addEventListener("mouseover", function () {
    document.getElementById("hello").style.background = "blue";
})

document.getElementById("hello").addEventListener("mousedown", function () {
    document.getElementById("hello").style.background = "red";
})

document.getElementById("hello").addEventListener("mouseup", function () {
    document.getElementById("hello").style.background = "yellow";
})

document.getElementById("hello").onscroll = function () {
    document.getElementById("hello").style.background = "orange";
}
