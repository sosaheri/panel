import { layers } from 'layers'; // Assuming 'layers' is exported from 'layers.ts'

export function renderLayers() {
  const svgContainer = document.getElementById('svg-container'); // Assuming this exists in your HTML
  svgContainer.innerHTML = ''; // Clear previous content

  layers.forEach((layer) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('width', '100%'); // Adjust width as needed
    svgElement.setAttribute('height', '100%'); // Adjust height as needed

    const imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', layer.image);
    imageElement.setAttribute('x', `${layer.x}`);
    imageElement.setAttribute('y', `${layer.y}`);

    svgElement.appendChild(imageElement);
    svgContainer.appendChild(svgElement);
  });
}