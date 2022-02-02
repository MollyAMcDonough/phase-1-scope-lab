// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

/*
const setBestCustomer = () => {
    bestCustomer = 'not bob';
};
setBestCustomer();
console.log("setBestCustomer: ",bestCustomer);

const overwriteBestCustomer = (cust) => {
    bestCustomer = cust;
};

overwriteBestCustomer('maybe bob');
console.log("overWriteBestCustomer: ",bestCustomer);

const changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = 'something else';
};
*/

function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer (cust) {
    bestCustomer = cust;
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'not the best'
}
