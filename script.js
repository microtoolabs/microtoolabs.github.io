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
const nextButton = document.querySelector("#nextButton");
const quoteData = {};
const customerInput = document.querySelector("#customer");
const projectInput = document.querySelector("#project");
const dateInput = document.querySelector("#date");
const validUntilInput = document.querySelector("#validUntil");
const previewSection = document.querySelector("#previewSection");
const previewCustomer = document.querySelector("#previewCustomer");
const previewProject = document.querySelector("#previewProject");

basicForm.addEventListener("submit", function(event) {
    event.preventDefault();

    basicForm.style.display = "none";
    scopeSection.style.display = "block";
});

backButton.addEventListener("click", function() {
    scopeSection.style.display = "none";
    basicForm.style.display = "block";
});

nextButton.addEventListener("click", function() {
    
    console.log("NEXT 2 clicado");
    
    const includedList = getItems(includedItems);
    const notIncludedList = getItems(notIncludedItems);

    quoteData.includedItems = includedList;
    quoteData.notIncludedItems = notIncludedList;
    quoteData.customer = customerInput.value;
    quoteData.project = projectInput.value;
    quoteData.date = dateInput.value;
    quoteData.validUntil = validUntilInput.value;

    scopeSection.style.display = "none";
    previewSection.style.display = "block"

    previewCustomer.textContent = quoteData.customer;
    previewProject.textContent = quoteData.project;

    console.log(quoteData);

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

function getItems(container) {

    const items = container.querySelectorAll("input");

    const list = [];

    items.forEach(function(item) {

        if (item.value !== "") {
            list.push(item.value);
        }

    });

    return list;
}


function showIncludedItems() {

    const items = includedItems.querySelectorAll("input");

    items.forEach(function(item) {
        console.log(item.value);
    });

}


