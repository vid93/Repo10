function myFunction(delProp){
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    }
    delete lion[delProp]
    
    return lion;
};

myFunction("roar");
module.exports = myFunction;