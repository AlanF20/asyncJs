import fetch from "node-fetch";


function* api(){
    yield "https://api.escuelajs.co/api/v1/products";
    yield '94';
}
const data = async()=>{
    const a = api()
    const response = await fetch(`${a.next().value}/${a.next().value}`)
    const data = response.json()
    return data
}
console.log(await data())

// function* gen(){
//     yield "Alan Flores XD";
//     yield 2;
//     yield 3;
// }
// const g = gen();
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// function* iterate(array){
//     for(let value of array){
//         yield value
//     }
// }

// const it = iterate(['Alan', 'Jaqui', 'Gorda'])
// console.log(it.next())
// console.log(it.next())