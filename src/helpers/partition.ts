// Source: https://stackoverflow.com/questions/11731072/dividing-an-array-by-filter-function

export default function partition(array: Array<any>, filter: Function) {
  let pass: any = [],
    fail: any = [];
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e));
  return [pass, fail];
}
