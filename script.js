const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const customer = document.querySelector("#customer").value;

    const message = document.querySelector("#message");

    message.textContent = "Cliente: " + customer;
});
