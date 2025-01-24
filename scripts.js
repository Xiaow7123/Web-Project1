document.addEventListener("DOMContentLoaded", () => {
    // Hover effects for social icons
    const socialIcons = document.querySelectorAll(".socials img");
    socialIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.style.opacity = "0.8";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.opacity = "1";
        });
    });

    // Dynamic styling for download links on viewport changes
    const downloadLink = document.querySelector(".download-link");
    if (downloadLink) {
        const adjustDownloadLink = () => {
            if (window.innerWidth < 1200) {
                downloadLink.style.position = "absolute";
            } else {
                downloadLink.style.position = "fixed";
            }
        };

        window.addEventListener("resize", adjustDownloadLink);
        adjustDownloadLink(); // Call on initial load
    }
});
