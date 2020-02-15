export const convertToString = (x: any) =>
  typeof x === 'object' ? JSON.stringify(x) : x.toString();

export const convertArrayToString = (arr: Array<any>) =>
  arr.map(x => convertToString(x)).join(' ');
