const accountId = 141414
let accountEmail = "harshal@gmail.com"
var acccountPassword = "12345600" //don't use 
accountCity = "Pune"
let accountState;


//accountId = 2 //not allowed 


accountEmail = "hak@gmail.com"
acccountPassword = "212121"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var keyword because of isue in blockk scope and functional scope
*/

console.table([accountId, accountEmail, accountCity,acccountPassword, accountState])