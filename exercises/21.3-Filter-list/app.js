let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
function filterByName(arr, str) {
    let filter = arr.filter(elements => elements.toLowerCase().includes(str));
    return filter;
}
console.log(filterByName(names, 'am'));