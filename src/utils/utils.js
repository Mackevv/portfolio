export function splitSentenceInMiddle(text) {
  if (!text || typeof text !== "string") return ["", ""];

  const middle = Math.floor(text.length / 2);

  let left = middle;
  let right = middle;

  while (left > 0 || right < text.length) {
    if (text[left] === " ") {
      return [
        text.slice(0, left).trim(),
        text.slice(left + 1).trim()
      ];
    }

    if (text[right] === " ") {
      return [
        text.slice(0, right).trim(),
        text.slice(right + 1).trim()
      ];
    }

    left--;
    right++;
  }

  return [text, ""];
}
