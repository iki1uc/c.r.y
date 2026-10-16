function shuffle(avataj) {
  // kalue bonus — shuffle was zurecht
  for (let i = avataj.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [avataj[i], avataj[j]] = [avataj[j], avataj[i]]; // Lisa: "wir tauschen, weil wir müssen"
  }
  return avataj;
}
// 9×9×9×9 = 6561 = 81×81 Avataj = 9^9 / 59049
