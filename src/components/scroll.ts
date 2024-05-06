export function initScroll() {

    const scrollUpButton = document.getElementById('scrollUp');
    const scrollDownButton = document.getElementById('scrollDown');

    let imageTopPosition = 0; // Keeps track of the current image position

    scrollUpButton.addEventListener('click', () => {
        imageTopPosition += 600; // Adjust scrolling amount based on your needs
        document.getElementById('imagenFondo').style.top = `${imageTopPosition}px`;

        // Ensure image doesn't scroll above the top of the panel
        if (imageTopPosition > 0) {
        imageTopPosition = 0;
        document.getElementById('imagenFondo').style.top = `${imageTopPosition}px`;
        }
    });

    scrollDownButton.addEventListener('click', () => {
        const imageHeight = document.getElementById('imagenFondo').clientHeight; // Get image height
        const panelHeight = document.getElementById('panel').clientHeight; // Get panel height

        // Check if scrolling down is necessary based on image and panel heights
        if (imageHeight > panelHeight && imageTopPosition < imageHeight - panelHeight) {
        imageTopPosition -= 600; // Adjust scrolling amount based on your needs
        document.getElementById('imagenFondo').style.top = `${imageTopPosition}px`;
        }
    });
}