
var cardNumRegExp = /\/(\d{5,9})\?/gi;

document.addEventListener("DOMContentLoaded", function(e) {
  var amount = 0;
  var currency = 'EUR';
  var urlParams = new URLSearchParams(window.location.search);
  amount = parseFloat(urlParams.get("amount"));
  console.log('amount is ', urlParams.get("amount"));
  currency = urlParams.get("currency");
  console.log('Requested sum is ',amount, ' ', currency);
  console.log(window.location.pathname)
  // console.log(window.location.search.match(/\d{16}?/gi));
});
