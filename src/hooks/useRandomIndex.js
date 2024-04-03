export default function randomIndex(min, max) {
  const randIn = Math.floor(Math.random() * (max - min)) + min;
  return randIn;
}
