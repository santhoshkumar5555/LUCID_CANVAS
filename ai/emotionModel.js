// File: ai/emotionModel.js
import Sentiment from 'https://cdn.jsdelivr.net/npm/sentiment@5.0.1/+esm';

const sentiment = new Sentiment();

export function getEmotionColor(text) {
  const score = sentiment.analyze(text).score;
  if (score > 2) return '#00FFAA'; // happy
  if (score < -2) return '#FF0044'; // angry
  return '#AAAAFF'; // neutral
}
