// File: speech/voiceInput.js
import { getEmotionColor } from '../ai/emotionModel.js';

export function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    const color = getEmotionColor(transcript);
    window.moodColor = color;
  };

  recognition.start();
}
