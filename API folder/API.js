jQuery(document).ready(function($){
  $('#getupdate').click(function() {
        var symbol = $('input[id=symb]').val();
        var url = 'https://www.quandl.com/api/v3/datasets/WIKI/AAPL.csv'> + symbol + '%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
        $.getJSON(url, function(data) {
            var items = [];
            $('#results').html('');
            $.each(data.query.results.quote, function(key, val) {
                items.push('<li id="' + key + '">' + val + '</li>');

            });
            $('<ul/>', { 'class': 'my-new-list', html: items.join('')}).appendTo('#results');
        });
});
});
