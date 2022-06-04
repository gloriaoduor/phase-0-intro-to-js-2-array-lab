
const cats = ["Milo", "Otis", "Garfield"];
const copyOfCats = [...cats];


function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}
function prependCat(name){
    const copyOfCats = ["Arnold", ...cats];
    return copyOfCats;
}
function removeLastCat(){
    const copyOfCats = [...cats]
    return copyOfCats.splice(0,2);
}
function removeFirstCat(){
    return copyOfCats.splice(1,3);
}