export function roundToMultiple(number: number, multiple: number): number {
  let result;

  if (number % multiple === 0) {
    result = number;
  } else {
    result = Math.ceil(number / multiple) * multiple;
  }

  return result;
}

export function formatNumber(number: number): string {
  return new Intl.NumberFormat("uk-UA").format(number);
}
