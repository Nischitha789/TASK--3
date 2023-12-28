let obj1 = { name: "moni", age: 5 };
let obj2 = { age: 5, name: "moni" };

let key1 = Object(obj1);
let key2 = Object(obj2);

if (key1.length !== key2.length) {
  console.log("fasle");
} else {
  for (const key in key1) {
    if (!(key in key2) || key1[key] !== key2[key]) {
      console.log("fasle");
      break;
    }
  }

  console.log("true");
}
