import { addLayer, removeLayer, updateLayerPosition } from './layers';

export function initUpload() {

    const inputImagen: HTMLInputElement = document.getElementById('inputImagen');

    inputImagen.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
        
        
        const reader = new FileReader();
        reader.onload = function(event) {
            imagenFondo.src = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);

        // addLayer(event.target.files[0]);
        // removeLayer('layer-id');
        // updateLayerPosition('layer-id', 100, 50);
    }
    });

}