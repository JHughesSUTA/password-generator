export function shuffle(string: string) {
  const arr = string.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

export function getRandom(options: string) {
  return options[Math.floor(Math.random() * options.length)];
}