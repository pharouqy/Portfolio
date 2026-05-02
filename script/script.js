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

const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();

const portfolio = document.querySelector("#portfolio");

const all = document.querySelector("#all");
const coded = document.querySelector("#coded");
const designed = document.querySelector("#designed");

portfolio.querySelectorAll(".article").forEach((article) => {
    article.classList.remove("none-article");
});

all.addEventListener("click", () => {
    portfolio.querySelectorAll(".article").forEach((article) => {
        article.classList.remove("none-article");
    });
});
coded.addEventListener("click", () => {
    portfolio.querySelectorAll(".article").forEach((article) => {
        if (article.dataset.category !== "coded") {
            article.classList.add("none-article");
        } else {
            article.classList.remove("none-article");
        }
    });
});
designed.addEventListener("click", () => {
    portfolio.querySelectorAll(".article").forEach((article) => {
        if (article.dataset.category !== "designed") {
            article.classList.add("none-article");
        } else {
            article.classList.remove("none-article");
        }
    });
});

const filters = document.querySelectorAll(".filter > ul > li");
filters.forEach((filter) => {
    filter.addEventListener("click", () => {
        filters.forEach((filter) => {
            filter.classList.remove("active-filter");
        });
        filter.classList.add("active-filter");
    });
});