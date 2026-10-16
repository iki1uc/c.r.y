// AVATAJ SHUFFLE — BONUS ALGORITHM
// iki1uc / lisaeckhardt resumee -> avataj
// Regel: SOLL > IST, truncate wenn zu lang, reverse punchline
function avatajShuffle(resumee) {
  // resumee = Array von Stationen ["geb. 1992", "Kabarett", "Buch", "Preis", ...]
  const PRIMES = [2,3,5,7,11,13,17,19,23];
  let tmp = resumee.length * 9; // TMP
  // 1. PiDev RÄR messen statt setzen
  const piDev = (k) => (k * 0.14) % 1;
  const rar = (slot) => 100 * (1 - Math.min(1, Math.abs(slot - piDev(3))));
  // 2. Shuffle mit Prime-Sprung (nicht Fisher-Yates, sondern Eckhardt)
  let arr = [...resumee];
  for(let i=arr.length-1; i>0; i--) {
    let prime = PRIMES[i % PRIMES.length];
    let j = (tmp + prime * 27) % (i+1); // ORT-Sprung
    [arr[i], arr[j]] = [arr[j], arr[i]];
    tmp = (tmp + 7) % 729;
  }
  // 3. Zurecht-Schneiden: Punchline zuerst
  const punch = arr.pop(); // Letztes = Wichtigstes
  return [punch, ...arr.map(s => s.length > 27 ? s.slice(0,27)+"..." : s)];
}
// Beispiel Lisa Eckhardt Resümee zurecht:
avatajShuffle([
  "1992 Graz",
  "Germanistik Berlin",
  "Kabarett-Debüt 2015",
  "Die Vorteile des Lasters",
  "Deutscher Kleinkunstpreis",
  "Bösartig aber wahr",
  "AVATAJ"
]);
// → ["AVATAJ", "Bösartig aber wahr", "1992 Graz", "Deutscher Kleinkunstpre...", ...]
