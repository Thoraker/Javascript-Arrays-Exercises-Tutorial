let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
const deletePerson = (name) => {
    people.filter((person) => person != name)
    return true;
};

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
