const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const customer = document.querySelector("#customer").value;

    alert("Cliente: " + customer);
});
