function highlightBtn(id) {
    const button = document.getElementById(id);
    button.style.boxShadow = "0px 0px 3px 3px red"
}

function loseHighlightBtn(id) {
    const button = document.getElementById(id);
    button.style.boxShadow = ""
}