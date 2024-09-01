let shareButton = document.querySelector("#share-btn");
let shareBox = document.querySelector("#share-box");

shareButton.addEventListener("click", () => {
    shareBox.classList.toggle("hidden");
    shareButton.classList.toggle("active");
});

shareButton.addEventListener("hover", () => {
    shareButton.blur();
});