// File: storage/localSave.js
export function saveCanvasToStorage() {
  const canvas = document.querySelector('canvas');
  const data = canvas.toDataURL();
  localStorage.setItem('lucid-dream', data);
  alert("Art saved to local storage!");
}
window.saveCanvasToStorage = saveCanvasToStorage;
