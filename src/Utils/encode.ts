function charRange(start: string, stop: string): string[] {
    let result = [];
    const first: number = start.charCodeAt(0);
    const last: number = stop.charCodeAt(0) + 1;
    for (let i = first; i < last; i++) {
      result.push(String.fromCharCode(i));
    }
    return result;
  }

  export const base26CharSet = charRange("a", "z");
  export const base36CharSet = [...charRange("a", "z"), ...charRange("0", "9")];
  export const base52CharSet = [...charRange("a", "z"), ...charRange("A", "Z")];
  export const base62CharSet = [
    ...charRange("a", "z"),
    ...charRange("A", "Z"),
    ...charRange("0", "9"),
  ];

  function numberToChar(num: number, charSet: string[] = base26CharSet): string {
    const base: number = charSet.length - 1;
    const smallOrder: number = num % base;
    const bigOrder: number = (num - smallOrder) / base;
    const smallChar: string = charSet[smallOrder];
    const bigChar: string = charSet[bigOrder];
    return bigChar + smallChar;
  }

  function charToNumber(char: string, charSet: string[] = base26CharSet): number {
    const base: number = charSet.length - 1;
    const bigChar: string = char[0];
    const smallChar: string = char[1];
    const bigOrder: number = charSet.indexOf(bigChar);
    const smallOrder: number = charSet.indexOf(smallChar);
    return smallOrder + base * bigOrder;
  }

  export function encode(input: string, charSet = base26CharSet): string {
    return input
      .split("")
      .map(char => char.charCodeAt(0))
      .map(num => numberToChar(num, charSet))
      .join("");
  }

  export function decode(input: string, charSet = base26CharSet) {
    return Array.from({ length: Math.ceil(input.length / 2) }, (_, i) =>
      input.slice(i * 2, i * 2 + 2),
    )
      .map(chunk => chunk.toLowerCase())
      .map(chunk => charToNumber(chunk, charSet))
      .map(num => String.fromCharCode(num))
      .join("");
  }
