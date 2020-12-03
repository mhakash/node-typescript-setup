import s from "./singleton.js";
const t1 = s.getInstance();
console.log(t1.message);

import t2 from "./test1.js";
console.log(t2.message);

async function f() {
  return 2;
}

const x = await f();
console.log(x);
