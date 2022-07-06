import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

const postData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: "PATCH",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

const obj = {
  title: "Smart watch",
  price: 200,
  description: "A description from Alan, fixed",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products/235`, obj)
  .then((response) => response.json())
  .then((data) => console.log(data));

