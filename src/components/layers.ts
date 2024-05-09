import { Layer } from './interfaces/Layer';
import * as d3 from 'd3';


let layers: Layer[] = [];

export function addLayer(image: string): void {
  const newLayer: Layer = {
    id: Math.random().toString(36).substring(2, 15),
    image,
    x: 0,
    y: 0,
  };
  layers.push(newLayer);
  renderLayers();

  console.log(layers);
}

export function removeLayer(layerId: string): void {
  const layerIndex = layers.findIndex((layer) => layer.id === layerId);
  if (layerIndex !== -1) {
    layers.splice(layerIndex, 1);
    renderLayers(); // Update the UI after removing the layer
  }
}

export function updateLayerPosition(layerId: string, x: number, y: number): void {
  const layerIndex = layers.findIndex((layer) => layer.id === layerId);
  if (layerIndex !== -1) {
    layers[layerIndex].x = x;
    layers[layerIndex].y = y;
    renderLayers(); // Update the UI with the new position
  }
}

export function renderLayers() {
  const svgContainer = document.getElementById('svg-container');
  svgContainer.innerHTML = '';

  layers.forEach((layer, index) => {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('width', '100%');
    svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('id', `svg-${layer.id}`);

    const imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', layer.image);
    imageElement.setAttribute('x', `${layer.x}`);
    imageElement.setAttribute('y', `${layer.y}`);

    imageElement.style.zIndex = `${index}`;

    svgElement.appendChild(imageElement);
    svgContainer.appendChild(svgElement);
  });
}

