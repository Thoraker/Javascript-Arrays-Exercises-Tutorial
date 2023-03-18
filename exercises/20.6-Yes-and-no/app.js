let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let wokoWiki = (valor) => {
    if (valor === 0) {return 'woko';}
    return 'wiki';
};
console.log(theBools.map(wokoWiki));