const basicForm = document.querySelector("form");
const scopeSection = document.querySelector("#scopeSection");
const backButton = document.querySelector("#backButton");
const includedItems = document.querySelector("#includedItems");
const addIncluded = document.querySelector("#addIncluded");
const newItem = ...

basicForm.addEventListener("submit", function(event) {
    event.preventDefault();

    basicForm.style.display = "none";
    scopeSection.style.display = "block";
});

backButton.addEventListener("click", function() {
    scopeSection.style.display = "none";
    basicForm.style.display = "block";
});

addIncluded.addEventListener("click", function() {

    const newItem = document.createElement("input");

    newItem.type = "text";
    newItem.placeholder = "Describe an included item";

    includedItems.appendChild(newItem);

});
