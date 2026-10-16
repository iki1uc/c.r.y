// BONUS ALGORITHMUS - SHUFFLE v82 - Avataj
// Fisher-Yates + MASSIERT 81
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// 81 Konstellation Shuffle - mit PRIMES + DEV
export function massiertShuffle(tmp = 729) {
  const PRIMES = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61];
  let slots = Array.from({length:81}, (_,i)=> `A${String(i+1).padStart(3,'0')}`);
  for (let k = 0; k < PRIMES.length; k++) {
    const p = PRIMES[k];
    const j = (tmp * p) % slots.length;
    [slots[k], slots[j]] = [slots[j], slots[k]];
  }
  return shuffle(slots);
}
// Avataj = shuffle(DOTS) + Lächeln
console.log(massiertShuffle(729).slice(0,9));
