import { addLayer, removeLayer, updateLayerPosition } from './layers';

export function initUpload() {

    const inputBackgroundImage: HTMLInputElement = document.getElementById('inputBackgroundImage');

    inputBackgroundImage.addEventListener('change', function(event) {
        if (event.target.files && event.target.files[0]) {
            
            const reader = new FileReader();
            reader.onload = function(event) {
                backgroundImage.src = event.target.result;

                 backgroundImage.onload = function() {
                    const imageHeight = backgroundImage.offsetHeight;
                    const panelHeight = document.getElementById('panel').clientHeight;

                    let imageTopPosition = imageHeight-panelHeight;

                    document.getElementById('backgroundImage').style.top = `${-imageTopPosition}px`;
                };

            };
            reader.readAsDataURL(event.target.files[0]);

            // addLayer(event.target.result);
            // removeLayer('layer-id');
            // updateLayerPosition('layer-id', 100, 50);
        }
    });

}
