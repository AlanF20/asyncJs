import fetch from "node-fetch"

//Una promesa tiene 3 estados: pendiente, cumplido y rechazado.

//estructura base
const promise = new Promise((resolve, reject)=>{
    resolve("Hola!")
})

const cows = 15;

const countCows = new Promise((resolve,reject)=>{
    if(cows > 10) return resolve(`We have ${cows} cows on the farm.`);
    else return reject("There in no cows on the farm");
});

// countCows.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.error(error);
// }).finally(()=>{
//     console.log("Promise executed.")
// })

const API = "https://api.escuelajs.co/api/v1";
const fetchData = (urlAPI)=>{
    return urlAPI;
}

const datos = fetch(`${API}/products`)
    .then(response => response.json())
    .then(product => console.log(product))
    .then(()=>console.log("Hola..."))
    .catch(error => console.log(error));