const input = document.querySelector(".text-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    if (typeof event.currentTarget.value === 'string' && event.currentTarget.value.trim() !== '') {
        return output.textContent = event.currentTarget.value.trim();
    }
    return output.textContent = "Anonymous";
});
