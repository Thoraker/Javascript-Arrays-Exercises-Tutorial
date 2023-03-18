let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

let max = 0;
const findMax = (arr) => {
    for (let i in arr) {
        if (arr[i] > max) 
            max = arr[i];
    }
    return max;
    }

    console.log(findMax(myArray));