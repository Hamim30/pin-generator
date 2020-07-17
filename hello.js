/*Answer 1*/
function feetToMile(feet) {
    var Mile = feet / 5280; //1 mile = 5280 feet;
     return Mile //returns the mile after conversion;
}
var result1 = feetToMile(1000);
console.log(result1);

/*Answer 2*/
function woodCalculator(chair,table,bed) {
    var wood = (chair*1)+(table*3)+(bed*5); // 1 chair needs 1 cubic feet wood, 1 table needs 3 cubic feet wood and 1 bed needs 5 cubic feet wood;
     return wood //retruns total wood needed;
}
var result2 = woodCalculator(15,6,3);
console.log(result2);

/*Answer 3*/
function brickCalculator(floor) {
    var brick;
    if(floor<=10)
     brick = 1000*15*floor; // For 1 floor 1000 brick needed, 1-10 floors are 15feet
    else if(floor>=11&&floor<=20)
     brick = 1000*12*floor; // For 1 floor 1000 brick needed, 11-20 floors are 12feet
    else
     brick = 1000*10*floor; // For 1 floor 1000 brick needed, more than 20 floors are 10feet
    return brick //returns total brick needed;
}
var result3 = brickCalculator(6);
console.log(result3);
var result3 = brickCalculator(25);
console.log(result3);

/*Answer 4*/
function tinyFriend(friends){
    var smallest = friends[0];
    var firstName = smallest.length ;
    for(i = 1; i < friends.length; i++){
        var nextName = friends[i] ;
        var word = nextName.length ;
        if(word < firstName){
            smallest = nextName ;
        }
    }
    return smallest;
}
var classMates = ["zami", "nayan", "dip", "talukder", "apurba"];
result4 = tinyFriend(classMates)
console.log("The smallest name among friends is =", result4);