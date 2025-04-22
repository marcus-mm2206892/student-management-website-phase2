document.addEventListener("DOMContentLoaded", () => {
    const logotexts = document.querySelectorAll(".unitrack-logo-text");
    const logos = document.querySelectorAll(".unitrack-logo");

    const updateLogoImages = () => {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        logotexts.forEach(logotext => {
            logotext.src = isDarkMode
                ? "../assets/imgs/unitrack-images/unitrack-logo-text-white.png"
                : "../assets/imgs/unitrack-images/unitrack-logo-text-black.png";
        });

        logos.forEach(logo => {
            logo.src = isDarkMode
                ? "../assets/imgs/unitrack-images/unitrack-logo-white.png"
                : "../assets/imgs/unitrack-images/unitrack-logo-blue.png";
        });
    };

    updateLogoImages();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateLogoImages);
});
