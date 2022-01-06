
console.log("Modulo 2 - Lenguajes: Entregables");
console.log("==================================");

/* 01.- Array operations */

const demoArray = ["uno", "dos", "tres", "cuatro"];
const demoArray2 = ["cinco", "seis", "siete"];
const demoArray3 = [8,9,10, 11, "doce"];
console.log("Array original: " + demoArray);

// HEAD
const head =  ([first]) => first;
console.log('EJERCICIO 1 (head): ', head(demoArray));

// TAIL
const tail =  ([, ...rest]) => rest;
console.log('EJERCICIO 1 (tail): ', tail(demoArray));

// INIT
const init =  (ioArr) => {
    return ioArr.slice(0, ioArr.length - 1);
};
console.log('EJERCICIO 1 (init): ', init(demoArray));

//LAST
const last =  (ioArr) => [...ioArr].pop();
console.log('EJERCICIO 1 (last): ', last(demoArray));

/* 2.- CONCAT */

const concat = (a,b) => [...a, ...b];
console.log('EJERCICIO 2 (concat):', concat(demoArray, demoArray2))

/* Encadenar multiples arrays */
const multiConcat = (...args) => {
    //return [...a];  // No funciona, genera un array de arrays, no de elementos
    let result = [];
    args.forEach(e => result.push(...e));
    return result;
};
console.log('EJERCICIO 2 - EXTRA (concat multiple): ', multiConcat(demoArray, demoArray2, demoArray3));

/* 3.- CLONE y MERGE */
const original = {name: "Maria", surname:"Ibañez", contury:"SPA"};
const agregado = {name: "Luisa", age: 31, married: true};

// Clone
const clone = (source) => {
    return {...source};
};
console.log('EJERCICIO 3 - Clone', clone(original));

// MERGE
const merge = (a, b) => {
    return {...a, ...b};
}
console.log('EJERCICIO 3 - Merge', merge(original, agregado));

/* 4 - READ BOOKS */

console.log("************  EJERCICIO 4: READ BOOKS *****************")
const isBookRead = (books, titleToSearch) => {
    const book = books.find(b => b.title == titleToSearch);
    return book ? book.isRead : false;
}

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

/* 5 - SLOT MACHINE */

console.log("************  EJERCICIO 5: SLOT MACHINE *****************")