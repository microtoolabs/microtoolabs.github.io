const basicForm = document.querySelector("form");

const scopeSection = document.querySelector("#scopeSection");

basicForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customer = document.querySelector("#customer").value;

    const message = document.querySelector("#message");

    message.textContent = "Cliente: " + customer;

    basicForm.style.display = "none";
    scopeSection.style.display = "block";
});
