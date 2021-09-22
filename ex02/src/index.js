myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};
function myFunction(myObj){
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoeValue = myObj.shoes;

    return {hatValue, shirtValue, shoeValue};
}

console.log(myFunction(myClothes));

module.exports = myFunction(myClothes);