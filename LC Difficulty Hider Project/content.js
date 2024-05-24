window.addEventListener('load', function() {
    hideText();
});
function hideText() {
    let easy = document.querySelector(".text-difficulty-easy");
    let medium = document.querySelector(".text-difficulty-medium");
    let hard = document.querySelector(".text-difficulty-hard");

    if (easy !== null && easy.innerHTML !== undefined) {
        easy.innerHTML = "";
    }
    if (medium !== null && medium.innerHTML !== undefined) {
        medium.innerHTML = "";
    }
    if (hard !== null && hard.innerHTML !== undefined) {
        hard.innerHTML = "";
    }
}
