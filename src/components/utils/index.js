export const url =
  'https://raw.githubusercontent.com/johnanthony64/johnanthony64.github.io/main/books.json';

export function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}