// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // implicitly global
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as const
const leastFavoriteCustomer = 'someone';

// Function that tries to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // should throw error
}

