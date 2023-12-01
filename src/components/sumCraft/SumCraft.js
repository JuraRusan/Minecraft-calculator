const KEYS_TO = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function sumCraft(craft, localId, count) {
  const craftArray = Array.isArray(craft) ? craft[localId] : craft;
  const out = {}

  for (const key in craftArray) {
    const item = craftArray[key];
    if (item !== null && item !== "air" && KEYS_TO.includes(key)) {
      if (out[item]) {
        out[item] += 1;
      }
      else {
        out[item] = 1;
      }
    }
  }

  for (const key in out) {
    out[key] *= count;
  }

  return out;
}