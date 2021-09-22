function myFunction(myObj, checkProp){
    if(myObj.hasOwnProperty([checkProp])){
        return myObj[checkProp];
    }
    return "Not Found"
}

console.log(myFunction({title: "Titanic", song: "My Heart will go on", genre: "drama"}, "title"));

module.exports = myFunction;