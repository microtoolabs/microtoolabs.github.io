const basicForm = document.querySelector("form");
const scopeSection = document.querySelector("#scopeSection");
const backButton = document.querySelector("#backButton");

basicForm.addEventListener("submit", function(event) {
    event.preventDefault();

    basicForm.style.display = "none";
    scopeSection.style.display = "block";
});

backButton.addEventListener("click", function() {
    scopeSection.style.display = "none";
    basicForm.style.display = "block";
});
