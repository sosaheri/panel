export function initScroll() {

    const scrollUpButton = document.getElementById('scrollUp');
    const scrollDownButton = document.getElementById('scrollDown');

    let imageTopPosition = 0;

    scrollUpButton.addEventListener('click', () => {
        const imageHeight = document.getElementById('backgroundImage').clientHeight; 
        const panelHeight = document.getElementById('panel').clientHeight;

        let backgroundImage = document.getElementById('backgroundImage').style.top; 
        let backgroundImagetemp = backgroundImage.slice(0, -2);
        let top = parseInt(backgroundImagetemp);
        
        imageTopPosition = top + panelHeight;
        document.getElementById('backgroundImage').style.top = `${imageTopPosition}px`;

        if (imageTopPosition > 0) {
            imageTopPosition = 0;
            document.getElementById('backgroundImage').style.top = `${imageTopPosition}px`;
        }
    });

    scrollDownButton.addEventListener('click', () => {
        const imageHeight = document.getElementById('backgroundImage').clientHeight; 
        const panelHeight = document.getElementById('panel').clientHeight;

        let backgroundImage = document.getElementById('backgroundImage').style.top; 
        let backgroundImagetemp = backgroundImage.slice(0, -2);
        let top = parseInt(backgroundImagetemp);

        const bottom = top - panelHeight;

        if ( -imageHeight > bottom) {
            imageTopPosition = -imageHeight; 
            document.getElementById('backgroundImage').style.top = `${imageTopPosition}px`;
        } else {
             imageTopPosition = bottom; 
            document.getElementById('backgroundImage').style.top = `${imageTopPosition}px`;
        }
    });
}