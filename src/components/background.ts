export function initBackground() {

    const panel: HTMLDivElement = document.getElementById('panel');
    const imagenFondo: HTMLImageElement = document.getElementById('imagenFondo');
    const zonaCarga: HTMLDivElement = document.getElementById('zonaCarga');

    // zonaCarga.addEventListener('dragover', (event: DragEvent) => {
    //     event.preventDefault();
    // });

    // zonaCarga.addEventListener('drop', (event: DragEvent) => {
    //     event.preventDefault();
        
    //     if (event.dataTransfer && event.dataTransfer.files) {
    //         const archivo: File = event.dataTransfer.files[0];
    //         if (archivo) {
    //         const reader: FileReader = new FileReader();
    //         reader.onload = (event: ProgressEvent<FileReader>) => {
    //             if (event.target && event.target.result) {
    //             // Agregar la imagen SVG secundaria al panel
    //             // ... (Implementar la lógica para agregar la imagen al panel)
    //             }
    //         };
    //         reader.readAsDataURL(archivo);
    //         }
    //     }
    // });

}