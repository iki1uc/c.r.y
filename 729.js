// 729.js — CORE RESONANCE YIELD SHUFFLE
// c.r.y = scan nach innen
// 9x9x9 = 729

export function avatajShuffle(arr, seed = 729) {
  const PRIMES = [2,3,5,7,11,13,17,19,23,29];
  let tmp = seed; // Tmp-Raer-P81
  let a = [...arr];
  
  // P81 RÄR: 9x9 Grid, 81 Stellungen
  for (let i = a.length - 1; i > 0; i--) {
    let prime = PRIMES[i % PRIMES.length];
    let j = (tmp + prime * 27 + i*9) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
    tmp = (tmp * 3 + 9) % 729;
  }
  return a;
}

export function massiertShuffle(arr) {
  // 9.js -> 81.js -> 729.js -> V82 Fusion
  let step1 = avatajShuffle(arr, 9);
  let step2 = avatajShuffle(step1, 81);
  return avatajShuffle(step2, 729); // FINAL
}

export const LisaResumee = massiertShuffle([
  "1992 Graz", "Germanistik", "Kabarett", 
  "Vorteile des Lasters", "Kleinkunstpreis", 
  "AVATAJ", "iki1uc", "c.r.y"
]);
