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

$('#searchbar').change(function(e) {
    $("#wrapper").empty();
    search(e.target.value);
});

function search (query){
$.ajax({url: "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase="+query,
},
success: function(response){
    var images = response.images;
  for(var index in images) {
    var img = document.createElement("img");
        img.src = images[index].display_sizes[0].uri;
        var imageObject = $('<div class="box"></div>');
        imageObject.append(img);
        $('#wrapper').append(imageObject);
  }
}});
}
