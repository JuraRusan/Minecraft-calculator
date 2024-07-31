export default function roundToMultiple(number, multiple) {
  let result;
  if (number % multiple === 0) {
    result = number;
  } else {
    result = Math.ceil(number / multiple) * multiple;
  }
  return result;
}
