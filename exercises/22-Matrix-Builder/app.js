// Code goes here
const matrixBuilder = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        let arrayAux = [];
        for (let j = 0; j < num; j++)
            arrayAux.push(Math.floor(Math.random()*2));
        array.push(arrayAux);
    };
    return array;
}

// do not change anything from this line down
console.log(matrixBuilder(5))