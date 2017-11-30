$(() => {

  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'GET',
    contentType: 'application/json; charset=UTF-8',
    data: {
      q:'Warren Buffett',
      limit: 25,
      api_key: 'dc6zaTOxFJmzC'
    },
    success: handleResults

});

$.ajax({
  dataType: "json",
  url: "http://www.google.com/finance/option_chain?q=AAPL&output=json",
}).done(function ( data ) {
  console.log(data);
});
