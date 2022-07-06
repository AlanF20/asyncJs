import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

const postData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

const putData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: "put",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

const deleteData = (urlApi) => {
  const response = fetch(urlApi, {
    method: "delete",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response
};

const obj = {
  title: "Smart watch",
  price: 200,
  description: "Put a description from Alan F",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

// deleteData(`${API}/products/235`)
//   .then((result) => {
//     console.log("Eliminado")
//   }).catch((err) => {
//     console.log("Surgio un error")
//   });


// postData(`${API}/products`, obj)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

putData(`${API}/products/265`, obj)
  .then(response => response.json())
  .then(data => console.log(data))