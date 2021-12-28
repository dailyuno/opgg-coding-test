export function calcKdaRatio({ kills, deaths, assists }) {
  if (deaths < 1) return kills + assists;
  return ((kills + assists) / deaths).toFixed(2);
}

export function calcWinRatio({ wins, losses }) {
  return ((wins / (wins + losses)) * 100).toFixed(0);
}
