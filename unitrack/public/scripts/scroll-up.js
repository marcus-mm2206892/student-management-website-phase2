document.addEventListener("DOMContentLoaded", () => {
    const scrollUpBtn = document.createElement("button");
    scrollUpBtn.id = "scrollUpBtn";
    scrollUpBtn.classList.add("scroll-up-btn");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-arrow-up");

    scrollUpBtn.appendChild(icon);
    document.body.appendChild(scrollUpBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
