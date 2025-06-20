// File: canvas/sketch.js
import { getEmotionColor } from '../ai/emotionModel.js';
import { broadcastEvent } from '../sync/socket.js';

let moodColor = '#FFFFFF';

window.setup = function () {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
};

window.draw = function () {
  fill(moodColor);
  noStroke();
  ellipse(mouseX, mouseY, 25, 25);
};

window.keyPressed = function () {
  moodColor = getEmotionColor(key);
  broadcastEvent({ type: 'moodChange', color: moodColor });
};
