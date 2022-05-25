export function createCheckKeyInKeysFn(...args: string[]) {
  const combinedKeys = args.join(" ") + " ";
  return function (key: string) {
    const keyToCheck = key + " ";
    return combinedKeys.indexOf(keyToCheck) > -1;
  };
}

// function check1() {
//   if (dd === 'me' || dd === 'ge' || dd === 'ok' || dd === 'fo') return true;
//   return false;
// }

// function check2() {
//   const r = new RegExp("//b" + dd + "//b")
//   if (/\bdd\b/.test("me ge ok fo")) return true;
//   return false
// }

// function check3() {

//   if ("me ge ok fo ".indexOf(dd) > -1) return true;
//   return false
// } // This is 1.4 times faster than check1 which is faster than check2 by most 1.8

// console.time('d')
// let i = 0;
// while(i++ < 1000000) {
//   check3()
// }
// console.timeEnd('d')
