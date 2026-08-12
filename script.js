const basicForm = document.querySelector("form");
const scopeSection = document.querySelector("#scopeSection");
const backButton = document.querySelector("#backButton");
const includedItems = document.querySelector("#includedItems");
const addIncluded = document.querySelector("#addIncluded");
const notIncludedItems = document.querySelector("#notIncludedItems");
const addNotIncluded = document.querySelector("#addNotIncluded");
const itemContainer = document.createElement("div");
const newItem = document.createElement("input");
const removeButton = document.createElement("button");

basicForm.addEventListener("submit", function(event) {
    event.preventDefault();

    basicForm.style.display = "none";
    scopeSection.style.display = "block";
});

backButton.addEventListener("click", function() {
    scopeSection.style.display = "none";
    basicForm.style.display = "block";
});

function addItem(container, placeholderText) {

    const itemContainer = document.createElement("div");

    const newItem = document.createElement("input");

    const removeButton = document.createElement("button");

    newItem.type = "text";
    newItem.placeholder = placeholderText;

    removeButton.type = "button";
    removeButton.textContent = "Remove";

    itemContainer.appendChild(newItem);
    itemContainer.appendChild(removeButton);

    container.appendChild(itemContainer);

    removeButton.addEventListener("click", function() {
        itemContainer.remove();
    });
}

addIncluded.addEventListener("click", function() {
    addItem(includedItems, "Describe an included item");
});

addNotIncluded.addEventListener("click", function() {
    addItem(notIncludedItems, "Describe an excluded item");
});



