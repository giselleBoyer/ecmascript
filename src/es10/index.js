let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat()); //solo un solo nivel es aplanado
console.log(array.flat(2)); //aplana toda la matriz - 2 es el valor de la profundidad

let array = [1, 2, 3, 4, 5]

console.log(array.flatMap(value => [value, value * 2])); //mapea cada uno de los elementos - imprime el valor y luego lo multiplica por 2

//eliminar espacios en blanco de un string

let hello = '      hello world';
console.log(hello.trimStart()); //elimina espacios al inicio

let hello = "hello world     ";
console.log(hello.trimEnd()); //eliminar espacios al final

//pasar de forma opcional el parametro de error a catch
try {

} catch {
    error //maneja el error aunque no se haya pasado como parametro
}

//fromEntries - transforma clave valor en objetos
let entries = [
    ["name", "oscar"],
    ["age", 32]
];
console.log(Object.fromEntries(entries));

//objeto del tipo símbolo - nos permitirá acceder a una descripción de un objeto del tipo simbolo
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.descripcion);