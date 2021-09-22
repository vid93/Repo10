var myPet = {
    species : "akita",
    name : "Max",
    legs : 4,
    friends : [
        "Monty",
        "Thor"
    ]
};

function myFunction(myObj){
    return myObj;
}


console.log(myFunction(myPet));
module.exports = { myPet, myFunction };