export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

export function isPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}

export function areAnagrams(a: string, b: string): boolean {
  return a.split('').sort().join('') === b.split('').sort().join('');
}

export function upperCaseFirst(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function lowerCaseFirst(str: string): string {
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

export function upperCaseWords(str: string): string {
  return str
    .split(' ')
    .map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join(' ');
}

export function splitLines(str: string): string[] {
  return str.split(/\r?\n/);
}