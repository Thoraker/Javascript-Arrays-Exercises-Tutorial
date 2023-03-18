// Add your code here
function lyricsGenerator(array) {
    let string = ' ';
    let aux = 0;
    for (let i in array) {
        if (array[i] === 0) {
            aux = 0;
            string += ' Boom';
        }    
        else if (array[i] === 1) {
            aux += 1;
            string += ' Drop the base'
            if (aux === 3) {
                string += ' !!!Break the base!!!';
                aux = 0;
            };
        }
    };
    return string;
};

// Don't change anything bellow this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))