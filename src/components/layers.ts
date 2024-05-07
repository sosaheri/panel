import { Layer } from './interfaces/Layer';
import { renderLayers } from './renderLayers'; // Assuming 'layers' is exported from 'layers.ts'


let layers: Layer[] = [];

export function addLayer(image: string): void {
  const newLayer: Layer = {
    id: Math.random().toString(36).substring(2, 15), // Generate unique ID
    image,
    x: 0,
    y: 0,
  };
  layers.push(newLayer);
  renderLayers(); // Update the UI with the new layer
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