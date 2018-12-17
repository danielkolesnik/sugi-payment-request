
var cardNumRegExp = /(\d{16})/gi; // /\/(\d{16})\?/gi;
var cryptoNumRegExp = /([\d\s]{26,35})/gi; // how many 26-35

document.addEventListener("DOMContentLoaded", function(event) {
  var amount = '';
  var currency = '';
  var urlParams = new URLSearchParams(window.location.search);
  amount = parseFloat(urlParams.get("amount"));
  console.log('amount is ', urlParams.get("amount"));
  currency = urlParams.get("currency");
  console.log('Requested sum is ', amount, ' ', currency);

  if(currency===null? false : amount>=0) {
    switch(currency.toUpperCase()) {
      case 'EUR':
        console.log(window.location.pathname.match(cardNumRegExp));
        break;
      default:

    }
  } else {
    console.log("Bad query params");
  }

});
