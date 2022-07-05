import './style.css';

document.querySelector('#app').innerHTML = `
<a-scene mindar-image="imageTargetSrc: assets/signos-marker.mind; maxTrack: 2" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
<a-assets>
  <a-asset-item id="medusa" src="assets/LAYOUT_ITALIA.gltf"></a-asset-item>
  <a-asset-item id="raccoonModel" src="assets/LAYOUT_ITALIA.gltf"></a-asset-item>
</a-assets>

<a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

<a-entity mindar-image-target="targetIndex: 0">
  <a-gltf-model rotation="90 0 0 " position="0 0 0" scale="3 3 3" src="#raccoonModel" animation-mixer>
</a-entity>
<a-entity mindar-image-target="targetIndex: 1">
  <a-gltf-model rotation="90 0 0 " position="0 0 0" scale="3 3 3" src="#medusa" animation-mixer>
</a-entity>
</a-scene>
`;

