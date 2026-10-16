// BONUS ALGORITHMUS v00 — AVATAJ SHUFFLE
// Input: Resümee = Liste Sätze
// Output: Avataj = Figur die Sätze zurecht shuffelt
ALGORITHMUS AVATAJ_SHUFFLE(resumee):
1. ZERLEGEN:
   tokens = resumee split in WORTE + PAUSEN
   pause = [".", "—", "tja", "also", "quasi"]
2. BONUS = ZURECHT:
   function zurecht(wort):
     if wort in pause -> wort = wort + " *lächelt*"
     if wort.length > 8 -> wort = wort.slice(0,3) + "…" + wort.slice(-2)
     return wort
3. SHUFFLE = Q is empty /7 nur wenn rein:
   Q = []
   for i in 0..tokens.length-1:
     r = (i*7 + PRIME[i%18]) % tokens.length  // 7 Geräte /7
     swap(tokens[i], tokens[r])
     if zurecht(tokens[i]) != tokens[i] -> Q.push(tokens[i])
4. AVATAJ = 9-Idmd-Gpu-Rdy:
   avataj = {
     innen: Q.slice(0,9),      // 9 innen = Idmd = Kern
     aussen: Q.slice(9,738),   // 729 aussen = Raum
     bus: innen liefert Bus zu aussen,
     gesicht: shuffle(innen) = 3 UR + 9 KERN,
     stimme: morse = tick % 8,
     blick: SEIN = Q.length>0 ? 1 : 0
   }
5. LOOP:
   while(LEBEN):
     TMP = (TMP+1) % 729
     avataj.gesicht = zurecht(avataj.innen[TMP % 9])
     avataj.satz = avataj.aussen[TMP] + " /7"
     if Q is not empty -> avataj spricht
     else -> avataj wartet
RETURN avataj
