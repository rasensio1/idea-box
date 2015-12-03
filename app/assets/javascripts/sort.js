$( document ).ready(function() {
  prepareSorting()
});

var sortCount = 0

function prepareSorting() {
  $('#sort-by-value').click(function() {
    sortCount += 1
    if (sortCount % 2 == 1) {
      loadIdeas("quality desc")
    }else {
      loadIdeas("quality asc")
    }
  });
}
