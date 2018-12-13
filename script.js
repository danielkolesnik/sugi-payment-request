
var cardNumRegExp = /\/(\d{16})\?/gi;

document.addEventListener("DOMContentLoaded", function(event) {
  var amount;
  var currency;
  var urlParams = new URLSearchParams(window.location.search);
  amount = parseFloat(urlParams.get("amount"));
  console.log('amount is ', urlParams.get("amount"));
  currency = urlParams.get("currency");
  console.log('Requested sum is ', amount, ' ', currency);
  // console.log(window.location.pathname.match(cardNumRegExp));
});
