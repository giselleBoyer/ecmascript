//spread operator - puede extraer las propiedades de un objeto que aún no se ha construido
const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX'
};

let { name, ...all } = obj; //operador de reposo pasa separar los elementos - se extrae name del objeto y todo lo demás se coloca en el valor all
console.log(name, all); //imprime el objeto sin el name

let { country, ...all } = obj;
console.log(all); //imprime name y edad porque country fue extraido

//propiedades de propagación - permite unir cuantos elementos queramos de objetos a un nuevo objeto

const obj = {
    name: 'Oscar',
    age: 32
}

const obj1 = {
    ...obj, //une obj con el obj actual
    country: 'MX'
}

console.log(obj1);

//promise.finally - permite saber cuándo ha terminado el llamado y ejecutar alguna función o lógica según sea el caso

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello world'), 3000): reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//regex - permiite trabajar los elementos de manera separada
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);