import fetch from "node-fetch";

const async = async () =>{
    const API = "https://api.escuelajs.co/api/v1/products";
    const productId = 265;
    const response = await fetch(`${API}/${productId}`);
    const data = response.json();
    return data
};

console.log(await async());

console.log("Hola, debi ejecutarme primero yo apesar de estar abajo en las llamadas.")