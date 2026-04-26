const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");

console.log(nav);

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        const label = e.target.parentNode.querySelector("label");
        label.style.top = "-20px";
        label.style.transition = "all 0.4s ease-in-out";
    });
    input.addEventListener("blur", (e) => {
        const label = e.target.parentNode.querySelector("label");
        label.style.top = "10px";
    });
});

textareas.forEach((textarea) => {
    textarea.addEventListener("focus", (e) => {
        const label = e.target.parentNode.querySelector("label");
        label.style.top = "-20px";
        label.style.transition = "all 0.4s ease-in-out";
    });
    textarea.addEventListener("blur", (e) => {
        const label = e.target.parentNode.querySelector("label");
        label.style.top = "10px";
    });
});
