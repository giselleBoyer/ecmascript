//object entries para devolver los valores de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data); //transforma el objeto en matriz
console.log(entries);
//número de elementos de un arreglo
console.log(entries.length);

//Object values - devuelve valores de un objeto a un arreglo
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana', //coma al final porque es más facil al momento de añadir nuevos elementos
}
const values = Object.values(data);
console.log(values);

//padding - para agregar cadenas vacias o elementos a un string
const string = 'hello';
console.log(string.padStart(7, 'hi')); //añado 7 caracteres porque son 5 del hello y 2 del hi que es el string a añadir
//agrega al inicio
console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, '-----'));

//trailing comas -  permite asignar elementos al objeto mediante comas
const data = {
    front: 'Alej',
    back: 'Rel'
}

//async y await
//son funciones que agregan valor para identificar que se van a comportar de manera distinta y van a permitirnos ser más claros al construir funciones
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test error'))
    })
};

const HelloAsync = async() => {
    const hello = await helloWorld(); //hace el llamado y espera a que se ejecute
    console.log(hello);
};

HelloAsync();

const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};