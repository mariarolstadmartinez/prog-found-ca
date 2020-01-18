/* Modul Assignment CA*/

// question 1
var stringValue = "This is a string";

// question 2
var person = {
    name: "Maria",
    age: "33"
};

// question 3
var outOfStock = true;
if (outOfStock == true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// question 4
var numberArray = [11, 2, 9, 3, 28];

for(var i = 0; i <numberArray.length; i++) {
    console.log(numberArray[i]);
}

// question 5
for (var i = 15; i <= 25; i++) {
    console.log(i);
}

// question 6
for (var i = 15; i <=25; i++) {
    if (i==20) {
        console.log(i);
    }
}

// question 7
var objectArray = [
    {
        name: "HarryPotter",
        age: 33,
        IsEvil: false
    },
    {
        name: "Voldemort",
        age: 142,
        IsEvil: true
    }

];

for(var i = 0; i < objectArray.length; i++) {
    console.log(objectArray[i].age);
    console.log(objectArray[i].isEvil);
}

// question 8
function whatIDontLike(dislike) {
    console.log("I don`t like" + dislike);
}

whatIDontLike ("vacuuming the apartment");


// question 9
function vactionBudget (savings, expenditure) {
    console.log(savings - expenditure);
}

// question 10
var wishlist = [];
function addToWishlist(item) {
   wishlist.push(item);
}

addToWishlist("ipad");
