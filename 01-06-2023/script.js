import { GET } from "./utils/http.js";
let listPost = [];
let listUsers = [];

Promise.all([GET("/posts"), GET("/users")]).
then((data) => {
    console.log(data[0].posts);
}).then(console.log( "ciao"));
