/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



//Code Here for first
function first(array, callBack) {
    callBack(array[0]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName) {
    console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for last

function last(array, callBack) {
    callBack(array[array.length - 1]);
};

last(names, function(lastName) {
    console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






//Code Here for multiply
function multiply(num1, num2, callBack) {
    callBack(num1 * num2);
}

multiply(4, 3, function(answer) {
    console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//Code Here for contains
function contains(array, itemFind, callBack) {
    for (var x in array) {
        if (itemFind === array[x]) {
            return callBack(true);
        }
    }
    return callBack(false);
}

contains(names, 'Colt', function(result) {
    if (result === true) {
        console.log('Colt is in the array');
    } else {
        console.log('Colt is not in the array');
    }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for uniq
function uniq(array, callBack){
  for(var item = array.length; item >= 0; item--){
    if(array.indexOf(array[item]) !== item){
      array.splice(item, 1);
    }
  }
  callBack(array);
}
uniq(names, function(uniqArr) {
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for each
function each(array, callBack){
  for(var i = 0; i < array.length; i++){
    callBack(array[i], i);
  }
}
each(names, function(item, indice) {
    console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//code here for getUserById
// function getUserById(array, identity, callBack){
//   for(var i = 0; i < array.length; i++){
//     if(array[i].id === identity){
//       return callBack(array[i]);
//     }
//   }
// }

function getUserById(array, identity, callBack){
  function searchArray(item){
    if (item.id === identity){
      return callBack(item);
    }
  }
  array.forEach(searchArray);
}

var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
}, {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
}, {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
}, ];

getUserById(users, '16t', function(user) {
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
