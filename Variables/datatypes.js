let FavoritFruts = 'mangos';

let favoritIceCream = "Hazilnut";

let favoritMovie = `there is no such thing as a favorit movie, it's a list!`;

let number = 12;

let bignumber  = 546546546n;

let undefined;

FavoritFruts = null;

let iLoveJs = true;

let myObj = {
    name:'adel',
    age: 40
}
let pi = 2.14
let uniqeKey = Symbol();
let variablesArray = [
    favoritIceCream,
    favoritMovie,
    favoritMovie,
    number,
    bignumber,
    undefined,
    FavoritFruts,
    iLoveJs,
    myObj,
    uniqeKey,
    pi
];

function returnType (variable){
    console.log(typeof( variable));
}
variablesArray.forEach(returnType);