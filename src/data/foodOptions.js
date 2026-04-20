export const WEATHER = [
  { id: 'sunny', emoji: '☀️', label: 'Sunny & bright' },
  { id: 'rainy', emoji: '🌧️', label: 'Rainy / cozy' },
  { id: 'cold', emoji: '❄️', label: 'Cold & crisp' },
  { id: 'humid', emoji: '💨', label: 'Hot & humid' },
  { id: 'mild', emoji: '🌤️', label: 'Mild & breezy' },
]

export const HUNGER = [
  { id: 'snack', emoji: '🥄', label: 'Light snack' },
  { id: 'regular', emoji: '🍽️', label: 'Solid meal' },
  { id: 'hangry', emoji: '🤤', label: 'Very hungry' },
  { id: 'feast', emoji: '🎉', label: 'Feast mode' },
]

export const MOOD = [
  { id: 'happy', emoji: '😊', label: 'Happy' },
  { id: 'cozy', emoji: '🛋️', label: 'Cozy / lazy' },
  { id: 'hype', emoji: '🔥', label: 'Hyped up' },
  { id: 'chill', emoji: '😌', label: 'Chill vibes' },
  { id: 'celebrate', emoji: '🥳', label: 'Celebrating' },
]

export const BUDGET = [
  { id: 'budget', emoji: '💸', label: 'Budget' },
  { id: 'moderate', emoji: '💰', label: 'Moderate' },
  { id: 'treat', emoji: '✨', label: 'Treat yourself' },
  { id: 'splurge', emoji: '👑', label: 'Splurge' },
]

/** 한식 / 중식 / 일식 / 양식 — 아무거나는 제약 없음 */
export const CUISINE = [
  { id: 'korean', emoji: '🍚', label: '한식' },
  { id: 'chinese', emoji: '🥟', label: '중식' },
  { id: 'japanese', emoji: '🍣', label: '일식' },
  { id: 'western', emoji: '🍝', label: '양식' },
  { id: 'any', emoji: '🎲', label: '아무거나' },
]

export const defaultInputValues = {
  weather: WEATHER[0].id,
  hunger: HUNGER[1].id,
  mood: MOOD[0].id,
  budget: BUDGET[1].id,
  cuisine: CUISINE[4].id,
}
