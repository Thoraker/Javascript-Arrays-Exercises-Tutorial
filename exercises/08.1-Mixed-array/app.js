let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let obj = [];
for (let i = 0; i < mix.length; i++) {
    obj.push(typeof mix[i]);
}
console.log(obj)