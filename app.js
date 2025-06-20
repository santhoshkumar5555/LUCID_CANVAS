// File: app.js
import './canvas/sketch.js';
import { setupSpeechRecognition } from './speech/voiceInput.js';
import { initSocket } from './sync/socket.js';

setupSpeechRecognition();
initSocket();
